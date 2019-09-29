import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function vkLink(
  url: string,
  { title, description, image }: { title?: string; description?: string; image?: string },
) {
  assert(url, 'vk.url');

  return (
    'https://vk.com/share.php' +
    objectToGetParams({
      url,
      title,
      description,
      image,
    })
  );
}

const VKShareButton = createShareButton<{ title?: string; description?: string; image?: string }>(
  'vk',
  vkLink,
  props => ({
    title: props.title,
    description: props.description,
    image: props.image,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
);

export default VKShareButton;
