import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";
import japTranslation from "./languages/ja-JP.json";

const PLUGIN_NAME = "TwilioFlexLocalizationJapanesePlugin";

export default class TwilioFlexLocalizationJapanesePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    // One Liner Code to Enable Localisation for Japanese
    manager.strings = { ...manager.strings, ...japTranslation };
  }
}
