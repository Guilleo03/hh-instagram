import { Group, Text, rem, SimpleGrid, Box } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import {
  Dropzone,
  DropzoneProps,
  IMAGE_MIME_TYPE,
  FileWithPath,
} from '@mantine/dropzone';
import { useFormContext, Controller } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';

const DropzoneComponent = (props: Partial<DropzoneProps>) => {
  const { control } = useFormContext();
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        alt="Preview"
        layout="fill"
        objectFit="contain"
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <Box w={600} h={300}>
      {files.length > 0 ? (
        <SimpleGrid
          pos="relative"
          w={'100%'}
          h={'100%'}
          cols={{ base: 1, sm: 4 }}
          mt={previews.length > 0 ? 'xl' : 0}>
          {previews}
        </SimpleGrid>
      ) : (
        <Controller
          control={control}
          name="file"
          render={({ field: { onChange, onBlur } }) => (
            <Dropzone
              onDrop={files => {
                onChange(files);
                setFiles(files);
              }}
              onReject={files => console.log('rejected files', files)}
              onBlur={onBlur}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              multiple={false}
              {...props}>
              <Group
                justify="center"
                gap="xl"
                mih={220}
                style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                  <IconUpload
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: 'var(--mantine-color-blue-6)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: 'var(--mantine-color-red-6)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: 'var(--mantine-color-dimmed)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Attach as many files as you like, each file should not
                    exceed 5mb
                  </Text>
                </div>
              </Group>
            </Dropzone>
          )}
        />
      )}
    </Box>
  );
};

export default DropzoneComponent;
