import React from "react";
import classnames from "classnames";
import TextField from "./common/TextField";
import { t } from "visual/utils/i18n";

export default class Paragraph extends TextField {
  static get componentTitle() {
    return t("Paragraph");
  }

  static get componentType() {
    return "Paragraph";
  }

  getClassName(v) {
    const { showPlaceholder } = v;

    return classnames(
      "brz-textarea brz-forms2__field brz-forms2__field-paragraph",
      { "brz-p-events--none": !showPlaceholder }
    );
  }

  renderForEdit(v) {
    const { labelType, attr } = v;

    return labelType === "outside" ? (
      <textarea
        {...attr}
        ref={this.input}
        className={this.getClassName(v)}
        value={attr.placeholder}
        onChange={e => {
          this.handleChange({ placeholder: e.target.value });
        }}
      />
    ) : (
      <textarea
        {...attr}
        ref={this.input}
        className={this.getClassName(v)}
        onChange={e => {
          this.handleChange({
            label: e.target.value,
            placeholder: e.target.value
          });
        }}
      />
    );
  }

  renderForView(v) {
    return <textarea {...v.attr} className={this.getClassName(v)} />;
  }
}
