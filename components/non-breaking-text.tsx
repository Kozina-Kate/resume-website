import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

const shortWordPattern = /(^|[\s([{«„"—–-])(а|без|бы|в|во|да|для|до|за|же|и|из|или|к|как|ко|ли|на|над|не|ни|но|о|об|от|по|под|при|про|с|со|у|я) (?=\S)/giu;
const textPropNames = ['aria-label', 'alt', 'label', 'text', 'title'] as const;

export function preventHangingWords(text: string) {
  let formattedText = text;
  let previousText: string;

  do {
    previousText = formattedText;
    formattedText = formattedText.replace(shortWordPattern, '$1$2\u00A0');
  } while (formattedText !== previousText);

  return formattedText;
}

function transformText(node: ReactNode): ReactNode {
  if (typeof node === 'string') {
    return preventHangingWords(node);
  }

  if (Array.isArray(node)) {
    return node.map(transformText);
  }

  if (!isValidElement(node)) {
    return node;
  }

  const element = node as ReactElement<Record<string, unknown>>;
  const nextProps: Record<string, unknown> = {};

  if ('children' in element.props) {
    nextProps.children = transformText(element.props.children as ReactNode);
  }

  for (const propName of textPropNames) {
    const value = element.props[propName];

    if (typeof value === 'string') {
      nextProps[propName] = preventHangingWords(value);
    }
  }

  return cloneElement(element, nextProps);
}

export function NonBreakingText({ children }: { children: ReactNode }) {
  return transformText(children);
}
