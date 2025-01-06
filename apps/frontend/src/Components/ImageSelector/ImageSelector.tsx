'use client';

import { useReducer, useRef, useState } from 'react';

import { BsStars } from '@react-icons/all-files/bs/BsStars';
import { FaUnsplash } from '@react-icons/all-files/fa6/FaUnsplash';
import { IoSearchSharp } from '@react-icons/all-files/io5/IoSearchSharp';
import { MdOutlineFileUpload } from '@react-icons/all-files/md/MdOutlineFileUpload';
import { MdOutlineImageSearch } from '@react-icons/all-files/md/MdOutlineImageSearch';
import { Button, Drawer, Select, Tooltip, Typography, Upload, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';

import {
  StyledContainer,
  StyledDrawerContent,
  StyledImageActionsWrapper,
  StyledImageContainer,
  StyledSearchActions,
  StyledSearchActionsTitle,
} from './ImageSelector.styled';

import { ALLOWED_IMAGE_FORMAT } from '@/constants/imageType';
import { IMAGES_PROVIDERS } from '@/constants/presentation';
import { ImageSearchOptions } from '@/types/presentation';
import { ImageSearchProviderAction, ImageSearchProviderState, ImageSearchProviders } from '@/types/providers';

export function ImageSelector({
  updateAttributes,
  defaultSrc,
  src,
  alt,
  renderImage,
  disabled,
  uploadPath,
}: {
  updateAttributes: (props: ImageSearchOptions) => void;
  defaultSrc: string;
  src: string;
  alt: string;
  renderImage: (props: ImageSearchOptions) => JSX.Element;
  disabled: boolean;
  uploadPath?: string | undefined;
}) {
  const [, setSearchConfig] = useReducer(
    (prev: ImageSearchProviderState, current: ImageSearchProviderAction): ImageSearchProviderState => ({
      ...prev,
      ...current,
    }),
    {
      provider: IMAGES_PROVIDERS.WEB,
    }
  );

  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnProviderChange = (providerName: ImageSearchProviders) => {
    setSearchConfig({ provider: providerName });
  };

  const handleUploadChange = (info: UploadChangeParam<UploadFile<{ data: { url: string } }>>) => {
    if (!ALLOWED_IMAGE_FORMAT?.includes(info.file.type?.split('/')?.[1] ?? '')) {
      return false;
    }

    setUploading(true);

    if (info.file.status !== 'uploading') {
      setUploading(true);
    }

    if (info.file.status === 'done') {
      const { response } = info.file;

      if (!response) {
        return console.error('Unable to upload media, please try again!');
      }

      updateAttributes({ src: response.data.url, alt: '' } as ImageSearchOptions);
      setUploading(false);

      return setOpen(false);
    }

    if (info.file.status === 'error') {
      console.error('Unable to upload media, please try again!');

      return setUploading(true);
    }

    return 'ok';
  };

  return (
    <StyledContainer ref={containerRef}>
      <Drawer title="Change image" placement="right" width={500} open={open} onClose={() => setOpen(false)}>
        <StyledDrawerContent>
          <StyledSearchActions>
            <StyledSearchActionsTitle>
              <Typography.Title level={5} style={{ margin: '0' }}>
                Search images
              </Typography.Title>
              <Upload
                showUploadList={false}
                maxCount={1}
                accept={ALLOWED_IMAGE_FORMAT.map((imageFormat) => `.${imageFormat}`).join(',')}
                action={`${process.env.NEXT_PUBLIC_API_BASE_URL}/media/upload?file=${uploadPath || ''}`}
                headers={{}}
                onChange={handleUploadChange}
                beforeUpload={(file) => {
                  return ALLOWED_IMAGE_FORMAT?.includes(file.type?.split('/')?.[1] ?? '');
                }}
                disabled={uploading}
              >
                <Button size="middle" icon={<MdOutlineFileUpload />} loading={uploading}>
                  Upload
                </Button>
              </Upload>
            </StyledSearchActionsTitle>
            <Select
              size="large"
              defaultValue={IMAGES_PROVIDERS.WEB}
              options={[
                {
                  label: (
                    <Typography.Text>
                      <MdOutlineImageSearch size={16} />
                      &nbsp; Images from Web
                    </Typography.Text>
                  ),
                  value: IMAGES_PROVIDERS.WEB,
                },
                {
                  label: (
                    <Typography.Text>
                      <FaUnsplash size={16} />
                      &nbsp; Images from Unsplash
                    </Typography.Text>
                  ),
                  value: IMAGES_PROVIDERS.UNSPLASH,
                },
                {
                  label: (
                    <Typography.Text>
                      <BsStars size={16} fill="currentColor" stroke="currentColor" />
                      &nbsp; Generate using AI
                    </Typography.Text>
                  ),
                  value: IMAGES_PROVIDERS.AI,
                },
              ]}
              onChange={handleOnProviderChange}
              disabled={uploading}
            />
          </StyledSearchActions>
        </StyledDrawerContent>
      </Drawer>
      <StyledImageContainer className="image-selector image-selector-wrapper">
        {renderImage({ src: src || defaultSrc, alt } as ImageSearchOptions)}
        {!disabled && (
          <StyledImageActionsWrapper className="image-actions-container">
            <div className="wrapper">
              <Tooltip title="Search for images">
                <Button
                  icon={<IoSearchSharp size={20} />}
                  size="large"
                  shape="circle"
                  onClick={() => setOpen((prevOpen) => !prevOpen)}
                />
              </Tooltip>
              {/* <Tooltip title="Change focus of image">
                <Button
                  icon={<TbFocus size={20} />}
                  size="large"
                  shape="circle"
                  onClick={() => setOpen((prevOpen) => !prevOpen)}
                />
              </Tooltip> */}
            </div>
          </StyledImageActionsWrapper>
        )}
      </StyledImageContainer>
    </StyledContainer>
  );
}
