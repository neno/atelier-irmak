import { createPortal } from 'react-dom';
import {FC, ReactElement, useLayoutEffect, useState} from "react";

function createWrapperAndAppendToBody(wrapperId: string) : HTMLDivElement {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface IReactPortal {
  children: ReactElement
  wrapperId: string
}

export const ReactPortal: FC<IReactPortal> = ({ children, wrapperId = "react-portal-wrapper" }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement|null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLDivElement;
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}
