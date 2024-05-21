import React from "react";
import Section from "../components/Section";

import { logoIcons } from "../constants";

const MovingLogo = () => {
  return (
    <Section
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden"
    >
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logoIcons.map((item) => (
          <li>
            <img
              src={item.src}
              key={item.id}
              alt={item.alt}
              width={80}
              height={20}
            />
          </li>
        ))}
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logoIcons.map((item) => (
          <li>
            <img
              src={item.src}
              key={item.id}
              alt={item.alt}
              width={80}
              height={20}
            />
          </li>
        ))}
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logoIcons.map((item) => (
          <li>
            <img
              src={item.src}
              key={item.id}
              alt={item.alt}
              width={80}
              height={20}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MovingLogo;
