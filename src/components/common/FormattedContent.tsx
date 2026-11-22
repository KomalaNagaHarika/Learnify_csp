import React from 'react';
import katex from 'katex';

/**
 * Decodes common HTML entities so raw escaped characters (&amp;, &lt;, etc.) never appear.
 */
export function decodeHtmlEntities(input: string): string {
  if (!input) return '';
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

/**
 * Normalizes Unicode math characters to clean LaTeX equivalents before passing to KaTeX.
 */
function normalizeUnicodeToLatex(expr: string): string {
  return expr
    .replace(/ε₀/g, '\\varepsilon_0')
    .replace(/μ₀/g, '\\mu_0')
    .replace(/⁻¹/g, '^{-1}')
    .replace(/⁻²/g, '^{-2}')
    .replace(/⁻³/g, '^{-3}')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁰/g, '^0')
    .replace(/¹/g, '^1')
    .replace(/₀/g, '_0')
    .replace(/₁/g, '_1')
    .replace(/₂/g, '_2')
    .replace(/₃/g, '_3')
    .replace(/°/g, '^\\circ')
    .replace(/×/g, '\\times ')
    .replace(/÷/g, '\\div ')
    .replace(/±/g, '\\pm ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/≠/g, '\\ne ')
    .replace(/≈/g, '\\approx ')
    .replace(/∝/g, '\\propto ')
    .replace(/∞/g, '\\infty ')
    .replace(/π/g, '\\pi ')
    .replace(/θ/g, '\\theta ')
    .replace(/λ/g, '\\lambda ')
    .replace(/μ/g, '\\mu ')
    .replace(/ρ/g, '\\rho ')
    .replace(/ω/g, '\\omega ')
    .replace(/Ω/g, '\\Omega ')
    .replace(/Δ/g, '\\Delta ')
    .replace(/α/g, '\\alpha ')
    .replace(/β/g, '\\beta ')
    .replace(/γ/g, '\\gamma ')
    .replace(/η/g, '\\eta ')
    .replace(/σ/g, '\\sigma ')
    .replace(/τ/g, '\\tau ')
    .replace(/φ/g, '\\phi ')
    .replace(/Φ/g, '\\Phi ')
    .replace(/⇌/g, '\\rightleftharpoons ')
    .replace(/→/g, '\\rightarrow ')
    .replace(/⇒/g, '\\implies ')
    .replace(/↔/g, '\\leftrightarrow ');
}

/**
 * Checks if a formula string is purely descriptive English wrapped in a single \text{...}
 * with no mathematical operators or equations, so it can wrap cleanly on mobile screens.
 */
function extractPureDescriptiveText(raw: string): string | null {
  const trimmed = raw.trim();
  const singleTextMatch = trimmed.match(/^\\text\{([^{}]+)\}$/);
  if (singleTextMatch) {
    const inner = singleTextMatch[1].trim();
    if (!/[=<>^_\\]/.test(inner)) {
      return inner;
    }
  }
  return null;
}

/**
 * Renders a mathematical or chemical equation cleanly using KaTeX.
 * Never shows raw LaTeX source code.
 */
export const MathFormula: React.FC<{
  formula: string;
  displayMode?: boolean;
  className?: string;
}> = ({ formula, displayMode = false, className = '' }) => {
  const cleaned = decodeHtmlEntities(formula || '').trim();
  if (!cleaned) return null;

  // Strip surrounding $$ or $ delimiters if present
  let expr = cleaned;
  if (expr.startsWith('$$') && expr.endsWith('$$') && expr.length > 4) {
    expr = expr.slice(2, -2).trim();
  } else if (expr.startsWith('$') && expr.endsWith('$') && expr.length > 2) {
    expr = expr.slice(1, -1).trim();
  }

  // If the formula is purely a descriptive sentence wrapped in \text{...}, render as readable prose
  const descriptiveOnly = extractPureDescriptiveText(expr);
  if (descriptiveOnly) {
    return (
      <span className={`font-sans font-semibold text-blue-950 ${className}`}>
        {descriptiveOnly}
      </span>
    );
  }

  const normalized = normalizeUnicodeToLatex(expr);

  let html = '';
  try {
    html = katex.renderToString(normalized, {
      displayMode,
      throwOnError: false,
      strict: 'ignore',
      trust: false,
      output: 'htmlAndMathml',
    });
  } catch {
    // Graceful human-readable fallback if an unexpected token appears
    return (
      <span className={`font-sans font-semibold text-blue-950 ${className}`}>
        {expr.replace(/\\text\{([^}]*)\}/g, '$1').replace(/\\/g, '')}
      </span>
    );
  }

  if (displayMode) {
    return (
      <div
        className={`w-full overflow-x-auto py-1 text-blue-950 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Replaces stray plain-text operators (like ` => ` or ` * ` between numbers/vars) with clean symbols
 * and detects accidental undelimited LaTeX fragments outside `$...$`.
 */
function preprocessInlineSegment(text: string): string {
  return decodeHtmlEntities(text)
    .replace(/\s*=>\s*/g, ' ⇒ ')
    .replace(/\s*->\s*/g, ' → ')
    .replace(/(\d|\))\s*\*\s*(\d|\()/g, '$1 × $2')
    .replace(/\b([a-zA-Z])\s*\*\s*([a-zA-Z0-9(])/g, '$1 × $2');
}

/**
 * Renders inline rich text supporting:
 * - `$...$` inline KaTeX math
 * - `**bold**` strong text (including inline math inside bold)
 * - `*italic*` emphasis
 * - Automatic cleanup of any undelimited raw LaTeX tokens
 */
export const InlineFormattedText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const decoded = decodeHtmlEntities(text);

  // Tokenize by $$...$$, $...$, **...**, *...*, or stray LaTeX commands like \frac{a}{b}, \vec{F}, \sqrt{x}, \text{...}
  const tokenRegex =
    /(\$\$[\s\S]+?\$\$|\$(?!\s)[^$\n]+?(?<!\s)\$|\*\*[^*]+\*\*|(?<!\*)\*(?!\s)[^*\n]+?(?<!\s)\*(?!\*)|\\(?:frac|sqrt|vec|text|overline|hat|bar|overset|underset|xrightarrow)\{[^{}]*\}(?:\{[^{}]*\})?|\\(?:pi|theta|Delta|alpha|beta|gamma|lambda|mu|rho|omega|Omega|sigma|epsilon|varepsilon|phi|Phi|tau|eta|times|div|pm|le|ge|ne|approx|propto|infty|rightarrow|rightleftharpoons|implies|iff|circ|cdot|perp|parallel|angle|triangle|uparrow|downarrow)\b)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIdx = 0;

  while ((match = tokenRegex.exec(decoded)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <React.Fragment key={`t-${keyIdx++}`}>
          {preprocessInlineSegment(decoded.slice(lastIndex, match.index))}
        </React.Fragment>
      );
    }

    const token = match[0];

    if (token.startsWith('$$') && token.endsWith('$$')) {
      parts.push(
        <MathFormula
          key={`m-${keyIdx++}`}
          formula={token.slice(2, -2)}
          displayMode={false}
          className="mx-0.5 text-blue-950"
        />
      );
    } else if (token.startsWith('$') && token.endsWith('$')) {
      parts.push(
        <MathFormula
          key={`m-${keyIdx++}`}
          formula={token.slice(1, -1)}
          displayMode={false}
          className="mx-0.5 text-blue-950"
        />
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      const inner = token.slice(2, -2);
      parts.push(
        <strong key={`b-${keyIdx++}`} className="font-semibold text-slate-900">
          <InlineFormattedText text={inner} />
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      const inner = token.slice(1, -1);
      parts.push(
        <em key={`i-${keyIdx++}`} className="italic text-slate-800">
          <InlineFormattedText text={inner} />
        </em>
      );
    } else if (token.startsWith('\\')) {
      parts.push(
        <MathFormula
          key={`l-${keyIdx++}`}
          formula={token}
          displayMode={false}
          className="mx-0.5 text-blue-950"
        />
      );
    } else {
      parts.push(<React.Fragment key={`o-${keyIdx++}`}>{token}</React.Fragment>);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < decoded.length) {
    parts.push(
      <React.Fragment key={`t-${keyIdx++}`}>
        {preprocessInlineSegment(decoded.slice(lastIndex))}
      </React.Fragment>
    );
  }

  return <>{parts}</>;
};

/**
 * Full block-level formatted educational prose renderer.
 * Converts headings (###), numbered lists, bullet lists, tables, display math ($$...$$),
 * inline math ($...$), and bold/italic emphasis into clean human-readable UI.
 */
export const FormattedText: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = '' }) => {
  if (!text) return null;

  const decoded = decodeHtmlEntities(text).replace(/\r\n/g, '\n');

  // Split first by standalone $$...$$ blocks (which may span multiple lines)
  const segments = decoded.split(/(\$\$[\s\S]+?\$\$)/g);

  return (
    <div className={`space-y-3 text-[15px] sm:text-base text-slate-800 leading-[1.75] ${className}`}>
      {segments.map((segment, segIdx) => {
        const trimmedSeg = segment.trim();
        if (!trimmedSeg) return null;

        if (trimmedSeg.startsWith('$$') && trimmedSeg.endsWith('$$') && trimmedSeg.length > 4) {
          return (
            <div
              key={`eq-${segIdx}`}
              className="my-3 py-2.5 px-4 bg-slate-50/80 border-y border-slate-200/80 text-center overflow-x-auto"
            >
              <MathFormula formula={trimmedSeg.slice(2, -2)} displayMode={true} />
            </div>
          );
        }

        // Parse lines into structured blocks (headings, tables, lists, paragraphs)
        const lines = segment.split('\n');
        const blocks: React.ReactNode[] = [];
        let i = 0;

        while (i < lines.length) {
          const rawLine = lines[i];
          const trimmed = rawLine.trim();

          if (!trimmed) {
            i++;
            continue;
          }

          // 1. Markdown headings: ###, ##, #
          const headingMatch = trimmed.match(/^#{1,4}\s+(.+)$/);
          if (headingMatch) {
            blocks.push(
              <h4
                key={`h-${segIdx}-${i}`}
                className="text-base font-bold text-slate-900 pt-2 first:pt-0"
              >
                <InlineFormattedText text={headingMatch[1].replace(/:$/, '')} />
              </h4>
            );
            i++;
            continue;
          }

          // 2. Markdown tables (consecutive lines starting with |)
          if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
              tableLines.push(lines[i].trim());
              i++;
            }
            const parsedRows = tableLines
              .filter((row) => !/^\|[\s\-:|]+\|$/.test(row))
              .map((row) =>
                row
                  .slice(1, -1)
                  .split('|')
                  .map((cell) => cell.trim())
              );

            if (parsedRows.length > 0) {
              const [headerRow, ...bodyRows] = parsedRows;
              blocks.push(
                <div
                  key={`tbl-${segIdx}-${i}`}
                  className="overflow-x-auto my-4"
                >
                  <table className="w-full text-left border-collapse border border-slate-300 text-sm">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        {headerRow.map((cell, cIdx) => (
                          <th key={cIdx} className="px-3.5 py-2 font-bold border border-slate-300">
                            <InlineFormattedText text={cell} />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {bodyRows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-3.5 py-2 text-slate-800 border border-slate-300">
                              <InlineFormattedText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            continue;
          }

          // 3. Unordered bullet list (- , • , * )
          if (/^([-•]|\*\s)\s*/.test(trimmed) && !trimmed.startsWith('**')) {
            const items: string[] = [];
            while (
              i < lines.length &&
              /^([-•]|\*\s)\s*/.test(lines[i].trim()) &&
              !lines[i].trim().startsWith('**')
            ) {
              items.push(lines[i].trim().replace(/^([-•]|\*)\s+/, ''));
              i++;
            }
            blocks.push(
              <ul key={`ul-${segIdx}-${i}`} className="list-disc pl-6 space-y-1.5 text-slate-800">
                {items.map((item, idx) => (
                  <li key={idx} className="pl-1 leading-[1.75]">
                    <InlineFormattedText text={item} />
                  </li>
                ))}
              </ul>
            );
            continue;
          }

          // 4. Numbered list item (e.g. "1. **Heading:**" optionally followed by indented sub-bullets)
          if (/^\d+\.\s+/.test(trimmed)) {
            const numberedItems: { num: string; text: string; subItems: string[] }[] = [];
            while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
              const numMatch = lines[i].trim().match(/^(\d+)\.\s+(.*)$/);
              const num = numMatch ? numMatch[1] : String(numberedItems.length + 1);
              const content = numMatch ? numMatch[2] : lines[i].trim();
              const subItems: string[] = [];
              i++;

              // Collect any immediately following indented bullet points belonging to this numbered item
              while (
                i < lines.length &&
                /^([-•]|\*\s)\s*/.test(lines[i].trim()) &&
                !lines[i].trim().startsWith('**')
              ) {
                subItems.push(lines[i].trim().replace(/^([-•]|\*)\s+/, ''));
                i++;
              }

              numberedItems.push({ num, text: content, subItems });
            }

            blocks.push(
              <ol key={`ol-${segIdx}-${i}`} className="space-y-2.5 pl-1">
                {numberedItems.map((item, idx) => (
                  <li key={idx} className="space-y-1.5">
                    <div className="flex items-start gap-2.5">
                      <span className="font-bold text-blue-950 shrink-0 min-w-[1.25rem]">
                        {item.num}.
                      </span>
                      <div className="flex-1 text-slate-800 leading-[1.75]">
                        <InlineFormattedText text={item.text} />
                      </div>
                    </div>
                    {item.subItems.length > 0 && (
                      <ul className="list-disc pl-11 space-y-1 text-slate-800">
                        {item.subItems.map((sub, sIdx) => (
                          <li key={sIdx} className="leading-[1.7]">
                            <InlineFormattedText text={sub} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            );
            continue;
          }

          // 5. Regular paragraph line
          blocks.push(
            <p key={`p-${segIdx}-${i}`} className="text-slate-800 leading-[1.75]">
              <InlineFormattedText text={trimmed} />
            </p>
          );
          i++;
        }

        return <React.Fragment key={`seg-${segIdx}`}>{blocks}</React.Fragment>;
      })}
    </div>
  );
};
