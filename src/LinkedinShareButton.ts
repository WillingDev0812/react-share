import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function linkedinLink(url: string) {
  assert(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + objectToGetParams({ url });
}

const LinkedinShareButton = createShareButton(
  'linkedin',
  linkedinLink,
  () => ({}),
  {
    windowWidth: 750,
    windowHeight: 600,
  },
);

export default LinkedinShareButton;
