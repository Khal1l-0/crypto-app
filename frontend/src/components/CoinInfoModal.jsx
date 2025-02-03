import { Flex,Tag, Typography, Divider } from "antd"
import CoinInfo from "./CoinInfo.jsx";

export default function CoinInfoModal({coin}) {
    return (
        <>
        <CoinInfo coin={coin} withSymbol/>
            <Divider/>
            <Typography.Paragraph>
                <Typography.Text strong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
                <Typography.Text strong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
                <Typography.Text strong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price: {coin.price.toFixed(2)}$</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: {coin.priceBtc}</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: {coin.marketCap}</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Contract Adress: {coin.contractAddress}</Typography.Text>
            </Typography.Paragraph>
        </>
    )
}