export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    content: {
        introduction: string;
        sections: {
            title: string;
            content: string;
            list?: string[];
            image?: string;
        }[];
        conclusion: string;
    };
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'selecting-mutual-fund-based-on-expense-ratio',
        title: 'Selecting Mutual Fund based on Expense Ratio',
        description: 'The Role of Expense Ratio and Returns in selecting the right mutual funds',
        author: 'Visshnu P M',
        date: '4/27/2024',
        readTime: '2 min read',
        content: {
            introduction: "When choosing a mutual fund, it's crucial to consider both the expense ratio and the expected returns. The expense ratio is a measure of the costs associated with managing and operating the fund, expressed as a percentage of the fund's assets. A lower expense ratio means fewer costs are deducted from the fund's returns, potentially leading to higher net gains for investors.",
            sections: [
                {
                    title: '',
                    content: 'Let us say you invested lumpsum INR 1,00,000 in two Mutual Funds, Fund A and Fund B respectively, if both funds give 10% return for the next 10 years, then the:\n\n- **Gross amount**: <span class="text-green-600 font-bold">2,59,374.25</span>\n- **Net Amount Fund A (Expense Ratio [1.5%])**: <span class="text-green-600 font-bold">2,26,098</span> (<span class="text-red-600 font-bold">-9%</span> from Gross Returns)\n- **Net Amount Fund B (Expense Ratio [0.5%])**: <span class="text-green-600 font-bold">2,47,822</span> (<span class="text-red-600 font-bold">-5%</span> from Gross Returns)\n\nClearly Fund B with low expense ratio has outperformed Fund A with higher expense ratio and similar CAGR',
                    image: '/mutual-fund-expense-ratio-graph.avif'
                },
                {
                    title: 'Key Considerations',
                    content: '',
                    list: [
                        '**Understand Expense Ratios**: The expense ratio includes management fees, administrative fees, and other operational costs. **Impact**: Even small differences in expense ratios can lead to significant variations in net returns over time.',
                        '**Analyze Gross vs. Net Returns**: **Gross Returns**: The return on an investment before any expenses are deducted. **Net Returns**: What investors actually earn after expenses. Always focus on net returns as they reflect the true profit from your investment.',
                        '**Long-term Effects**: Over the long term, funds with lower expense ratios generally outperform those with higher expenses, assuming similar gross returns. This is because lower expenses allow more of the fund\'s gross returns to compound over time.',
                        '**Example Comparison**: Consider two hypothetical funds: **Fund A**: Expense ratio of 1.5%, **Fund B**: Expense ratio of 0.5%. If both funds offer a gross annual return of 10%, Fund B, with its lower expense ratio, will accumulate more wealth over time due to lower deducted costs.'
                    ]
                }

            ],
            conclusion: 'When selecting a mutual fund, compare the projected net returns after expenses. Choose a fund with a manageable expense ratio without compromising on the quality and potential of the fund manager and the investment strategy. Remember, a lower expense ratio can significantly enhance your investment\'s growth potential, especially in the long-term investment horizon.'
        }
    },
    {
        slug: 'sip-vs-lump-sum-investment',
        title: 'SIP vs Lump sum Invetsment',
        description: 'An analysis with evidence to show what suits high risk vs less risk taking people',
        author: 'Visshnu (Strategist)',
        date: '4/18/2024',
        readTime: '2 min read',
        content: {
            introduction: 'Analysis of Systematic Investment Plan (SIP) vs. Lump Sum Investment in Nifty 50\n\nIntroduction: This document presents a comprehensive analysis of two popular investment strategies—Systematic Investment Plan (SIP) and Lump Sum Investment—applied to the Nifty 50 index from 2018 to the present. The analysis includes key financial metrics: Compound Annual Growth Rate (CAGR), volatility, and maximum drawdown, providing insights into the performance and risk associated with each investment type.',
            sections: [
                {
                    title: 'Investment Strategies',
                    content: '',
                    list: [
                        '**SIP Investment**: Investors commit to investing a fixed amount of 5,000 INR monthly regardless of the market condition.',
                        '**Lump Sum Investment**: A one-time investment of the equivalent total amount invested in the SIP at the beginning of the period.'
                    ],
                    image: '/sip_vs_lump_sum_investment.avif'
                },
                {
                    title: 'Financial Metrics',
                    content: '1. **Compound Annual Growth Rate (CAGR)**:\n- SIP Investment: <span class="text-green-600 font-bold">7.64%</span>\n- Lump Sum Investment: <span class="text-green-600 font-bold">11.64%</span>\n\nCAGR provides a mean annual growth rate which normalizes the rate of return over the investment period.\n\n2. **Volatility**:\n- SIP Investment: Calculation was not feasible due to data characteristics.\n- Lump Sum Investment: 5.13%\n\nVolatility measures the standard deviation of the investment\'s returns, which reflects the risk due to price fluctuations.\n\n3. **Maximum Drawdown**:\n- SIP Investment: <span class="text-red-600 font-bold">22.35%</span>\n- Lump Sum Investment: <span class="text-red-600 font-bold">29.34%</span>\n\nMaximum drawdown assesses the maximum observed loss from a peak to a trough of the investment, before a new peak is attained, highlighting the potential risk from an investment.',
                    image: '/sip_vs_lump_sum_investment2.avif'
                },
                {
                    title: 'Analysis',
                    content: 'The SIP strategy shows a lower CAGR compared to the lump sum investment but potentially offers lower volatility and maximum drawdown, indicating less risk and smaller value drops during market downturns. The lump sum investment, while providing higher returns, also poses a higher risk as indicated by a greater maximum drawdown.'
                }
            ],
            conclusion: 'Choosing between SIP and lump sum investments depends on the investor’s risk tolerance, investment horizon, and market timing. SIPs might be more suited for investors looking for more consistent and less risky investment paths, while lump sum investments could appeal to those willing to accept higher risk for potentially greater returns.'
        }
    }
];
