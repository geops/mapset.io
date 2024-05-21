import React from 'react'
import { useI18n } from './I18n';
import Price from './Price';
import CheckIcon from './images/CheckIcon';

interface ListItemProps {
    title: string;
    content?: string;
    unavailable?: boolean;
    hasFootNote?: boolean;
}

const Cross = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-1">
        <path d="M18.5089 2.952L12.3649 9.064L18.5089 15.208L15.6609 18.056L9.51688 11.912L3.34088 18.056L0.524875 15.208L6.66888 9.064L0.524875 2.952L3.37288 0.103998L9.51688 6.216L15.6289 0.103998L18.5089 2.952Z" fill="#126392"/>
    </svg>

)

const fontInterGray = `text-gray text-sm font-semibold leading-5 font-inter`

const ListItem = (props: ListItemProps) => {
    const { title, content, unavailable, hasFootNote } = props
    return (
        <li className="pt-6 grid grid-cols-[1fr_6fr]">
            {unavailable ? <Cross /> : <CheckIcon />}
            <div className="mt-1">
                <div className="font-semibold text-blue-500">{title}{hasFootNote ? '*' : ''}</div>
                {content && <span className={fontInterGray}>{content}</span>}
            </div>
        </li>
    )
}

interface Props {
    key: string;
    product: string;
    price: number;
    basemap: string;
    tools: string;
    planExport: string;
    embed: string;
    busTramStopsCount: string;
    railwayStopsCount: string;
}

function PriceCard(props: Props) {
    const { t } = useI18n()
    const { key, product, price, basemap, tools, planExport, embed, busTramStopsCount, railwayStopsCount} = props;

    return (
        <td className="w-full min-w-[290px] border-[3px] rounded-2xl bg-white p-3 font-hero" key={key}>
            <div className="flex flex-col items-center align-center justify-center gap-6">
                <span className="align-text-bottom w-[min-content] text-blue-700 border border-[#8FCCFE] pt-1 px-4 rounded-full bg-[#F1F9FE]">{product}</span>
                <div className="font-bold text-[56px] text-blue-700">{price}</div>
                <div className="text-sm font-semibold text-gray"><Price>{t("per month")}</Price></div>
            </div>
            <ul>
                <ListItem title={t("pricing.basemap")} content={basemap} />
                <ListItem title={t("pricing.tools")} content={tools} />
                <ListItem title={t("pricing.plan_export")} content={planExport} />
                <ListItem title={t("pricing.embed")} content={embed} />
                <ListItem title={busTramStopsCount} hasFootNote/>
                <ListItem title={railwayStopsCount || t("keine Zughaltestellen")} unavailable={!railwayStopsCount} hasFootNote/>
            </ul>
            <p className={`p-5 text-center ${fontInterGray}`}>{t("490 € einmalige Einrichtungsgebühr")}**</p>
        </td>
    )
}

export default PriceCard
