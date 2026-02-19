import {
  AddressIcon,
  EmailIcon,
  PhoneIcon,
  TgIcon,
  VkIcon,
  WebSiteIcon,
  WhtspIcon,
  YndDzenIcon,
  YtIcon,
} from "@/shared/ui";

type ContactsData = {
  phones: { label: string; href: string }[];
  emails: { label: string; href: string }[];
  website: { label: string; href: string } | null;
  socials: { key: string; href: string }[];
  address: string;
};

type CompanyContactsSectionProps = {
  data: ContactsData;
};

export const CompanyContactsSection = ({
  data,
}: CompanyContactsSectionProps) => {
  const iconByKey: Record<string, React.ReactNode> = {
    telegram: <TgIcon />,
    whatsapp: <WhtspIcon />,
    vk: <VkIcon />,
    youtube: <YtIcon />,
    yandexDzen: <YndDzenIcon />,
  };

  return (
    <div className="rounded-[26px] bg-white p-5">
      <h3 className="text-lg font-semibold text-secondary">Контакты</h3>
      <div className="mt-4 flex flex-col gap-4 text-sm text-secondary">
        {data.phones.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 text-sm text-secondary hover:text-secondary/80 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#BFBFBF]">
              <PhoneIcon />
            </span>
            <span className="break-words">{item.label}</span>
          </a>
        ))}

        {data.emails.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 text-sm text-secondary hover:text-secondary/80 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#BFBFBF]">
              <EmailIcon />
            </span>
            <span className="break-words">{item.label}</span>
          </a>
        ))}

        {data.website ? (
          <a
            href={data.website.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-secondary hover:text-secondary/80 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#BFBFBF] [&_path]:fill-[#BFBFBF]">
              <WebSiteIcon />
            </span>
            <span className="break-words">{data.website.label}</span>
          </a>
        ) : null}

        {data.socials.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {data.socials.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white text-accent-quinary hover:text-secondary transition-colors"
                aria-label={item.key}
              >
                {iconByKey[item.key]}
              </a>
            ))}
          </div>
        ) : null}

        <div className="pt-2">
          <p className="text-base font-semibold text-secondary">Адрес</p>
          {data.address ? (
            <div className="mt-3 flex items-center gap-3 text-sm text-secondary">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#BFBFBF] [&_path]:fill-[#BFBFBF]">
                <AddressIcon />
              </span>
              <span className="min-w-0 break-words">{data.address}</span>
            </div>
          ) : (
            <p className="mt-2 text-sm text-accent-quinary">Адрес не указан</p>
          )}
        </div>
      </div>
    </div>
  );
};
