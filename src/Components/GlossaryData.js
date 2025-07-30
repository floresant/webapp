const groupByLetter = (items) => {
    return items.reduce((groups, item) => {
        const letter = item.phrase[0];
        if (!groups[letter]) {
            groups[letter] = [];
        }
        groups[letter].push(item);
        return groups;
    }, {});
}

const glossaryData = [
  {
    phrase: `Accredited Investor (AI)`,
    definition: `An 'accredited investor' is a designation defined by the U.S. Securities and Exchange Commission (SEC) under Regulation D of the Securities Act of 1933. This status allows individuals and entities to invest in certain securities offerings that are not registered with the SEC, such as private equity. Accredited investors are considered to have sufficient financial knowledge and resources to bear the risks of these investments. Individuals must meet an income test of at least $200,000 annually ($300,000 for spouses) or a net worth test exceeding $1 million, excluding primary residence.`,
  },
  {
    phrase: `Alpha`,
    definition: `A measure of an investment's performance relative to a market benchmark, indicating potential excess return.`,
  },
  {
    phrase: `Alternative Investments`,
    definition: `Investments outside traditional assets such as stocks, bonds, or cash, including private equity, hedge funds, real estate, and collectibles.`,
  },
  {
    phrase: `Assets Under Management (AUM)`,
    definition: `Assets Under Management. A subset of Assets Under Advisory that includes only assets with discretionary authority.`,
  },
  {
    phrase: `Basis Points (BPs or bps)`,
    definition: `Basis Points represent 1% of 1% or 0.01%. 100 basis points equals 1%.`,
  },
  {
    phrase: `Beta`,
    definition: `A measure of volatility or risk in comparison to the market as a whole, useful for evaluating risk exposure.`,
  },
  {
    phrase: `Capital Cost Basis`,
    definition: `The initial cost basis of equity as of the valuation date.`,
  },
  {
    phrase: `Carried Interest or 'Carry'`,
    definition: `A bonus entitlement accruing to an investment fund's management company. Carried interest becomes payable once investors have achieved repayment of their original investment in the fund, plus a defined hurdle rate, if applicable. Terms vary by Limited Partnership Agreement.`,
  },
  {
    phrase: `Catch-up Period`,
    definition: `The period following the limited partners‚ preferred return, where the general partner receives the majority or all profits until the agreed profit-split is reached.`,
  },
  {
    phrase: `Clawback Provision`,
    definition: `An obligation that, over the fund's life, prevents managers from receiving a greater share of distributions than intended. When triggered, clawback requires the general partner to return 'excess' distributions to the limited partners.`,
  },
  {
    phrase: `Co-investment`,
    definition: `An arrangement where an investor can invest in a company or asset alongside a general partner without going through the fund, thereby avoiding management and incentive fees.`,
  },
  {
    phrase: `Collateralized Loan Obligation (CLO)`,
    definition: `A collateralized loan obligation (CLO) is a single security backed by a pool of debt. The securitization process pools these assets into marketable securities.`,
  },
  {
    phrase: `Commitment Period`,
    definition: `The time frame during which investors are obligated to provide capital to a fund, usually the early years of a private equity fund.`,
  },
  {
    phrase: `Compound Annual Growth Rate (CAGR)`,
    definition: `Compound Annual Growth Rate, a measure of investment growth over time.`,
  },
  {
    phrase: `De Novo Investment`,
    definition: `De novo, Latin for 'from the beginning,' refers to extending a platform company to a new site built from the ground up.`,
  },
  {
    phrase: `Distributed to Paid-In Capital (DPI)`,
    definition: `Distributed to Paid-In capital (DPI): Realized value divided by invested capital.`,
  },
  {
    phrase: `Due Diligence`,
    definition: `The comprehensive review or audit of a potential investment, assessing its financial and operational health.`,
  },
  {
    phrase:
      `Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA)`,
    definition: `Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of a company's operational profitability.`,
  },
  {
    phrase:
      `End of Day (EOD), End of Month (EOM), End of Quarter (EOQ), End of Year (EOY)`,
    definition: `Abbreviations for common end-of-period financial timeframes: End of Day, End of Month, End of Quarter, and End of Year.`,
  },
  {
    phrase: `Enterprise Value (EV)`,
    definition: `Enterprise Value, the total value of a company, including equity and debt.`,
  },
  {
    phrase: `Exit Strategy`,
    definition: `A plan for investors to realize the return on an investment, often through a sale, IPO, or other liquidity event.`,
  },
  {
    phrase: `Fee Structure`,
    definition: `The total fees associated with an investment, including management fees and performance-based fees like carried interest.`
  },
  {
    phrase: `Forbearance`,
    definition: `A temporary postponement of loan payments granted by the lender to avoid foreclosure or default.`
  },
  {
    phrase: `General Partner (GP)`,
    definition: `General Partner, an investor who owns a business structured as a partnership and is involved in its day-to-day management.`
  },
  {
    phrase: `Hurdle Rate`,
    definition: `The minimum rate of return that must be achieved before the fund manager can receive performance-based fees.`
  },
  {
    phrase: `Internal Rate of Return (IRR)`,
    definition: `Internal Rate of Return (IRR) based on historical portfolio cash flows and unrealized value.`
  },
  {
    phrase: `J-Curve`,
    definition: `The tendency for a fund to produce early negative returns due to expenses, followed by positive returns as portfolio companies mature. This pattern resembles a 'J' when charted.`
  },
  {
    phrase: `Liquidity`,
    definition: `The ease with which an asset can be converted into cash without significantly affecting its price.`
  },
  {
    phrase: `Loan to Value (LTV)`,
    definition: `Loan to Value, the ratio of loan amount to the appraised value of an asset.`
  },
  {
    phrase: `Lock-Up Period`,
    definition: `A period during which investors are restricted from redeeming or selling their shares in a private equity or hedge fund.`
  },
  {
    phrase: `Net Asset Value (NAV)`,
    definition: `Net Asset Value, the total value of an entity's assets minus liabilities.`
  },
  {
    phrase: `Net Operating Income (NOI)`,
    definition: `Net Operating Income, a measure of profitability from property investments, excluding financing and tax costs.`
  },
  {
    phrase: `Not Applicable (N/A) and Not Meaningful (NM)`,
    definition: `Not Applicable (N/A) and Not Meaningful (NM).`
  },
  {
    phrase: `Open-End Fund`,
    definition: `A fund that issues and redeems shares at the investor's demand, growing or shrinking as money flows in or out.`
  },
  {
    phrase: `Payment-In-Kind (PIK)`,
    definition: `Payment-In-Kind, an option allowing accrued interest to be added to the loan balance instead of paying cash.`
  },
  {
    phrase: `Portfolio Diversification`,
    definition: `The practice of spreading investments across various asset classes to reduce overall risk.`
  },
  {
    phrase: `Primary Investments`,
    definition: `Investments made during the early stages of a private company or private equity fund.`
  },
  {
    phrase: `Probate`,
    definition: `A legal process that validates a deceased individual's will and oversees the distribution of assets to beneficiaries.`
  },
  {
    phrase: `Public Market Equivalent (PME)`,
    definition: `Public Market Equivalent, a benchmarking tool that compares private investment returns to public market indexes.`
  },
  {
    phrase: `Qualified Domestic Trust (QDOT`,
    definition: `A trust that allows non-U.S. citizen spouses to qualify for the marital deduction and defer estate taxes.`
  },
  {
    phrase: `Qualified Purchaser (QP)`,
    definition: `A qualified purchaser, as defined by the SEC, generally a high-net-worth individual or entity with $5 million or more in investments.`
  },
  {
    phrase: `Realized Investment`,
    definition: `An investment reduced to a zero cost basis due to realizations or official write-offs by the General Partner.`
  },
  {
    phrase: `Realized Value`,
    definition: `The equity cost basis or capital gain/income returned from investments.`
  },
  {
    phrase: `Registered Investment Company (RIC)`,
    definition: `Registered Investment Company, an SEC-regulated financial institution that pools client capital to invest in a portfolio.`
  },
  {
    phrase: `Secondary Investments`,
    definition: `The acquisition of existing positions in private companies or private equity funds.`
  },
  {
    phrase: `Step-Up in Basis`,
    definition: `An adjustment in the value of an inherited asset, resetting its cost basis to its fair market value at the time of the decedent, death.`
  },
  {
    phrase: `Total Value`,
    definition: `Unrealized value combined with realized value.`
  },
  {
    phrase: `Total Value to Paid-In Capital (TVPI)`,
    definition: `Total Value to Paid-In capital (TVPI): Total value divided by invested capital.`
  },
  {
    phrase: `Trustee`,
    definition: `An individual or entity responsible for managing assets held in a trust on behalf of the beneficiaries.`
  },
  {
    phrase: `Uniform Commercial Code Filing (UCC Filing)`,
    definition: `Uniform Commercial Code Filing, a document that protects lenders by securing assets used as loan collateral.`
  },
  {
    phrase: `Unrealized Investment`,
    definition: `Any portfolio investment that has not yet been realized.`
  },
  {
    phrase: `Unrealized Value`,
    definition: `The remaining invested capital's valuation, including cash holdings and net liabilities as of the valuation date.`
  },
  {
    phrase: `Unrelated Business Taxable Income (UBTI)`,
    definition: `Unrelated Business Taxable Income (UBTI), which can trigger tax requirements for tax-exempt investors under certain fund activities.`
  },
  {
    phrase: `Vesting`,
    definition: `The process by which an employee earns the right to receive employer-contributed benefits over time.`
  },
  {
    phrase: `Vintage Year`,
    definition: `The year of a fund's first net cash flow.`
  },
  {
    phrase: `Write-down`,
    definition: `An investment held below cost or realized at a loss but still returned some capital.`
  },
  {
    phrase: `Write-off`,
    definition: `An investment with no remaining value that the Firm considers realized.`
  },
];

export const groupedGlossaryData = groupByLetter(glossaryData);