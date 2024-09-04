import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { DynamicIcon } from '../icons/DynamicIcon';
import { fileTypeIcon } from './fileTypeIcon';
import { humanFileSize } from '../../core/humanFileSize';

const options: Options = {
  renderNode: {
    'asset-hyperlink': function AssetHyperlink(node, children) {
      const { content, data, nodeType } = node;
      const { fields, metadata, sys } = data.target;

      const { title, description, file } = fields;
      const { contentType, details, fileName, url } = file;
      const { image, size } = details;

      const isImage = contentType.startsWith('image/');

      return isImage ? (
        <img src={url} alt={title || description || fileName} />
      ) : (
        <a
          className="w-40 inline-flex flex-col gap-2 p-2 pb-8 overflow-hidden items-center no-underline hover:underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          data-size={size}
        >
          <DynamicIcon
            icon={fileTypeIcon(contentType)}
            className="shrink-0 grow-1 h-10 w-10 text-indigo-600 inline mb-2"
            aria-hidden="true"
          />
          <span className=" text-sm text-center">{title}</span>
          <span className="text-xs text-center"> ({humanFileSize(size, true)})</span>
        </a>
      );
    },
    // 'embedded-entry-inline': function EmbeddedEntryInline(node, children) {
    //   console.log('node', node);
    //   console.log('children', children);
    //
    //   return <span>EmbeddedEntryInline</span>;
    // },
  },
};

export const renderContent = (content: Document) => documentToReactComponents(content, options);
