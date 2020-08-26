import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useState, FC, ChangeEvent } from 'react';
import { CurrencyKey } from 'constants/currency';

import Card from 'components/Card';
import styled from 'styled-components';
import { FlexDivCentered, FlexDivRowCentered, numericValueCSS } from 'styles/common';
import NumericInput from 'components/Input/NumericInput';
import { NO_VALUE } from 'constants/placeholder';
import { formatCryptoCurrency } from 'utils/formatters';

type CurrencyCardProps = {
	side: 'base' | 'quote';
	currencyKey?: CurrencyKey;
	amount: string;
	onAmounChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
	walletBalance: number | null;
};

const CurrencyCard: FC<CurrencyCardProps> = ({
	side,
	currencyKey,
	amount,
	onAmounChange,
	walletBalance,
}) => {
	const { t } = useTranslation();

	const isBase = side === 'base';

	return (
		<StyledCard>
			<Card.Body>
				<LabelContainer>
					{isBase ? t('exchange.currency-card.from') : t('exchange.currency-card.into')}
				</LabelContainer>
				<CurrencyContainer>
					<CurrencySelector>
						{currencyKey || t('exchange.currency-selector.no-value')}
					</CurrencySelector>
					{currencyKey && (
						<CurrencyAmount value={amount} onChange={onAmounChange} placeholder="0" />
					)}
				</CurrencyContainer>
				<WalletBalanceContainer>
					<WalletBalanceLabel>{t('exchange.currency-card.wallet-balance')}</WalletBalanceLabel>
					<WalletBalance>
						{walletBalance == null ? NO_VALUE : formatCryptoCurrency(walletBalance)}
					</WalletBalance>
				</WalletBalanceContainer>
			</Card.Body>
		</StyledCard>
	);
};

const StyledCard = styled(Card)`
	width: 312px;
	font-size: 12px;
`;

const LabelContainer = styled.div`
	padding-bottom: 13px;
	text-transform: capitalize;
`;

const CurrencyContainer = styled(FlexDivCentered)`
	padding-bottom: 6px;
`;

const CurrencySelector = styled.div`
	padding-right: 30px;
	font-size: 16px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

const CurrencyAmount = styled(NumericInput)`
	font-size: 16px;
`;

const WalletBalanceContainer = styled(FlexDivRowCentered)``;

const WalletBalanceLabel = styled.div`
	font-weight: 500;
`;

const WalletBalance = styled.div`
	${numericValueCSS};
`;

export default CurrencyCard;
