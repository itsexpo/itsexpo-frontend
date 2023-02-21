import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

export default function MainEventCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div
      className='bg-tainted-100 z-[1] md:max-w-[380px] rounded-lg'
      data-aos='fade-up'
    >
      <div
        className={clsxm(
          'flex flex-col justify-start px-10 py-8 rounded-lg group transition duration-200',
          'hover:bg-[url(/images/landing/pattern-background.png)] hover:bg-cover hover:bg-no-repeat h-full'
        )}
      >
        <Typography
          variant='h4'
          as='h4'
          className='font-primary text-left text-4xl md:text-5xl mb-4 group-hover:text-white'
        >
          {title}
        </Typography>
        <Typography
          variant='b'
          as='b'
          className='group-hover:text-white font-normal text-sm md:text-lg'
        >
          {description}
        </Typography>
        <div className='md:mt-4 mt-11'>
          <div className='opacity-0 group-hover:opacity-100'>
            <ButtonLink
              href={link}
              variant='discolored'
              size='base'
              className=''
            >
              Baca Selengkapnya
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
