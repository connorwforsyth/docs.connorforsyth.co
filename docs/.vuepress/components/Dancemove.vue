import {
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionPanel,
    CAccordionIcon,
  } from "@chakra-ui/vue";

  <c-accordion :allow-multiple="true" :default-index="[0]">
    <c-accordion-item>
      <c-accordion-header>
        <c-box flex="1" text-align="left">
          Section 1 title
        </c-box>
        <c-accordion-icon />
      </c-accordion-header>
      <c-accordion-panel pb="4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </c-accordion-panel>
    </c-accordion-item>
    <c-accordion-item>
      <c-accordion-header>
        <c-box flex="1" text-align="left">
          Section 2 title
        </c-box>
        <c-accordion-icon />
      </c-accordion-header>
      <c-accordion-panel pb="4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </c-accordion-panel>
    </c-accordion-item>
  </c-accordion>