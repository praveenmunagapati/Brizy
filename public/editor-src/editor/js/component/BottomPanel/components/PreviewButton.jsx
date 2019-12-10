import React from "react";
import { connect } from "react-redux";
import Config from "visual/global/Config";
import EditorIcon from "visual/component/EditorIcon";
import { pageSlugSelector } from "visual/redux/selectors";

function PreviewButtons({ pageSlug }) {
  const { pagePreview } = Config.get("urls");
  let url = pagePreview + "/" + pageSlug;

  return (
    <li
      className="brz-li brz-ed-fixed-bottom-panel__item brz-ed-fixed-bottom-panel__preview"
      title="Preview"
    >
      <a href={url} className="brz-a" target="_blank" rel="noopener noreferrer">
        <EditorIcon icon="nc-preview" />
      </a>
    </li>
  );
}

const mapStateToProps = state => ({
  pageSlug: pageSlugSelector(state)
});

export default connect(mapStateToProps)(PreviewButtons);
