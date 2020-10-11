var questionArray = [
    {
       "Type":"Accounting"
      ,"Question":"What are the 3 financial statements, and why do we need them?"
      ,"Answer":"The 3 major financial statements are the Income Statement, Balance Sheet, and Cash Flow Statement. The Income Statement shows the company’s revenue, expenses, and taxes over a period and ends with Net Income, which represents the company’s after-tax profits. The Balance Sheet shows the company’s Assets – its resources – as well as how it paid for those resources – its Liabilities and Equity – at a specific point in time. Assets must equal Liabilities plus Equity. The Cash Flow Statement begins with Net Income, adjusts for non-cash items and changes in operating assets and liabilities (working capital), and then shows the company’s cash from Investing or Financing activities; the last lines show the net change in cash and the company’s ending cash balance. You need these statements because there is a big difference between a company’s Net Income and the cash it generates – the Income Statement alone doesn’t tell what its cash flow is. Remember the key valuation formula: Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate) The 3 financial statements let you estimate the “Cash Flow” part, which helps you value the company more accurately. "
    },
    {
       "Type":"Accounting"
      ,"Question":"How do the 3 statements link together?"
      ,"Answer":" Access the Rest of the IB Interview Guide 65 of 99 http://breakingintowallstreet.com To link the statements, make Net Income from the Income Statement the top line of the Cash Flow Statement. Then, adjust this Net Income number for any non-cash items such as Depreciation & Amortization. Next, reflect changes to operational Balance Sheet items such as Accounts Receivable, which may increase or decrease the company’s cash flow depending on how they’ve changed. This gets you to Cash Flow from Operations. Next, take into account investing and financing activities, which may increase or decrease cash flow, and sum up Cash Flow from Operations, Investing, and Financing to get the net change in cash at the bottom. Link Cash on the Balance Sheet to the ending Cash number on the CFS, and add Net Income to Retained Earnings within the Equity category on the Balance Sheet. Then, link each non-cash adjustment to the appropriate Asset or Liability; SUBTRACT links on the Assets side and ADD links on the L&E side. And then link each CFI and CFF item to the matching item on the Balance Sheet, using the same rule as above. Check that Assets equals Liabilities plus Equity at the end; if this is not true, you did something wrong and need to re-check your work. "
    },
    {
       "Type":"Accounting"
      ,"Question":"What’s the most important financial statement?"
      ,"Answer":"The Cash Flow Statement is the most important single statement because it tells you how much cash a company is generating. The Income Statement is misleading because it includes non-cash revenue and expenses and excludes cash spending such as Capital Expenditures. "
    },
    {
       "Type":"Accounting"
      ,"Question":"What if you could use only 2 statements to assess a company’s prospects – which ones would you use, and why?"
      ,"Answer":"You would use the Income Statement and Balance Sheet because you can create the Cash Flow Statement from both of those (assuming there are “Beginning” and “Ending” Balance Sheets that correspond to the same period shown on the Income Statement). Access the Rest of the IB Interview Guide 66 of 99 http://breakingintowallstreet.com It would be MUCH harder to “construct” an Income Statement from the Balance Sheet and Cash Flow Statement (for example). "
    },
    {
       "Type":"Accounting"
      ,"Question":"How might the financial statements of a company in the U.K. or Germany be different from those of a company based in the U.S.?"
      ,"Answer":"Income Statements and Balance Sheets tend to be similar across different regions, but companies that use IFRS often start the Cash Flow Statement with something other than Net Income: Operating Income, Pre-Tax Income, or if they are using the Direct Method for creating the CFS, Cash Received or Cash Paid. There are also minor naming differences; for example, the Income Statement might be called the “Consolidated Statement of Earnings” or the “Profit & Loss Statement,” and the Balance Sheet might be called the “Statement of Financial Position.” Technically, U.S.-based companies that follow U.S. GAAP can also use the Direct Method for creating the CFS, but in practice, they tend to use the Indirect Method (i.e., they start with Net Income and make adjustments to determine the cash flow). "
    },
    {
       "Type":"Accounting"
      ,"Question":"What should you do if a company’s Cash Flow Statement starts with something OTHER than Net Income, such as Operating Income or Cash Received?"
      ,"Answer":"For modeling and valuation purposes, you should convert this Cash Flow Statement into one that starts with Net Income and makes the standard adjustments. Large companies should provide a reconciliation that shows you how to move from Net Income or Operating Income to Cash Flow from Operations and that lists the changes in Working Capital and other non-cash adjustments. If the company does NOT provide that reconciliation, you might have to stick with the CFS in the original format. "
    },
    {
       "Type":"Accounting"
      ,"Question":"How do you know when a revenue or expense line item should appear on the Income Statement?"
      ,"Answer":"Two conditions MUST be true for an item to appear on the Income Statement: Access the Rest of the IB Interview Guide 67 of 99 http://breakingintowallstreet.com 1. It must correspond to ONLY the period shown on the Income Statement. This is why monthly rent shows up, but paying for a factory that will last for 10 years does not. 2. It must affect the company’s taxes. Interest on debt is tax-deductible, so it shows up, but repayment of debt principal is not, so it does not show up. Whether or not something is received or paid in cash has nothing to do with this classification – companies pay taxes on non-cash revenue (e.g., receivables) and save on taxes from non-cash expenses (e.g., depreciation) all the time. Advanced Note: Technically, in point #2 we should say, “It must affect the company’s BOOK taxes” (i.e., only the tax number that appears on the Income Statement). Many items that are not deductible for cash-tax purposes still appear on the IS and affect book taxes. "
    },
    {
       "Type":"Accounting"
      ,"Question":"How can you tell whether an item should be classified as an Asset, Liability, or Equity on the Balance Sheet?"
      ,"Answer":"An Asset will generate future cash flow for the company or can be sold for cash. Think about how AR means the company should receive more cash in the future. A Liability will cost the company cash in the future and cannot be sold because it represents payments the company owes. Think about Debt or Accounts Payable and how they represent owed payments. Equity line items are similar to Liabilities because they represent funding sources for the company – but they will NOT result in future cash costs. They relate to funds the company has saved up on its own or funds that it has raised from outside investors with no cash cost (i.e., equity). "
    },
    {
       "Type":"Accounting"
      ,"Question":"How can you tell whether or not an item should appear on the Cash Flow Statement?"
      ,"Answer":" You list an item on the Cash Flow Statement if: 1) It has already appeared on the Income Statement and affected Net Income, but it’s noncash, and you need to adjust for it to determine the company’s real cash flow; OR 2) It has NOT appeared on the Income Statement and it DOES affect the company’s cash balance. Access the Rest of the IB Interview Guide 68 of 99 http://breakingintowallstreet.com In category #1 are items such as Depreciation and Amortization; Category #2 includes most of the items in Cash Flow from Investing and Financing, such as Capital Expenditures and Dividends. Changes in Working Capital could fall into either category depending on the change (e.g., an increase in AR is in category #1, but a decrease in AR is in category #2). "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company uses cash-based accounting (i.e., it only records revenue when it is received in cash and only records expenses when they are paid in cash) rather than accrual accounting. A customer buys a TV from the company “on account” (i.e., without paying upfront in Cash) and receives the TV right away. How would the company record this transaction differently from a company that uses accrual accounting?"
      ,"Answer":" Under cash-based accounting, the revenue would not show up until the company collects the cash from the customer – at which point it would add to Revenue on the Income Statement (and Pre-Tax Income, Net Income, etc.) and Cash on the Balance Sheet. Under accrual accounting, the sale would show up as Revenue right away, but instead of appearing in Cash on the Balance Sheet, it would go into Accounts Receivable at first. Then, once the cash is deposited in the company’s bank account, it would move into Cash, and Accounts Receivable would decrease. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company begins offering 12-month installment plans to customers so that they can pay for $500 or $1,000 courses over a year instead of all upfront. How will its cash flow change?"
      ,"Answer":"In the short term – during THIS year – the company’s cash flow will decrease because some customers no longer pay upfront in cash. So, a $1,000 payment in Month 1 now turns into $83 in Month 1, $83 in Month 2, and so on. This situation corresponds to Accounts Receivable: The Asset on the Balance Sheet that represents owed future payments from customers. The long-term impact depends on how much sales grow as a result of this change. If sales grow substantially and the company’s Revenue and Net Income increase, that might be enough to offset the reduced cash flow and make the company better off. Access the Rest of the IB Interview Guide 69 of 99 http://breakingintowallstreet.com "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company decides to prepay its monthly rent – an entire year upfront – because it can save 10% by doing so. Will this prepayment boost the company’s cash flow?"
      ,"Answer":"In the short term, no, because the company is now paying 12 * Monthly Rent in a single month rather than making one payment per month. On the Income Statement in Month 1, the company will still record only the Monthly Rent for that month. But on the Cash Flow Statement, it will list a negative 12 * Monthly Rent under “Change in Prepaid Expenses” to represent the cash outflow for the prepayment. A 10% discount represents just over 1 month of rent, so the company’s immediate cash flow will decrease substantially. In the long term, this discount will improve the company’s cash flow because the timing difference will go away after a year. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Your friend is analyzing a company and says that you always have to look at the Cash Flow Statement to find the full amount of Depreciation. Is he right?"
      ,"Answer":" And if so, what are the implications? Yes, your friend is correct. This happens because companies often embed Depreciation within other line items, such as COGS and Operating Expenses, on the Income Statement. That’s because portions of Depreciation might correspond to different functions in the company. For example, employees in sales & marketing, research & development, and customer support might all be using computers, so Depreciation of computers would show up in each of those categories. This fact has several implications: First off, you CANNOT assume that the Depreciation listed on the Income Statement is the full amount. A company might list a portion of it as an explicit line item but embed other portions elsewhere. Second, adding back the full amount on the CFS shows that Depreciation simply reduces the company’s taxes without “costing” it anything in cash. This is why Depreciation boosts the company’s cash balance as well: the tax savings. Access the Rest of the IB Interview Guide 70 of 99 http://breakingintowallstreet.com "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company mentions that it collects cash payments from customers for a monthly subscription service a year in advance. Why would a company do this, and what is the cash flow impact?"
      ,"Answer":"A company would collect cash payments for a monthly service long in advance if it has the market power do so. It’s always better to get cash earlier rather than later because of the time value of money, so if the market and customers support this plan, any company would do it. Often, companies will provide an incentive, such as discounted pricing, a free bonus, or free services to incentivize customers to pay upfront. This practice always boosts a company’s cash flow. It corresponds to Deferred Revenue, and on the CFS, an increase in Deferred Revenue will be a positive entry that boosts a company’s cash flow. When this cash is finally recognized as revenue, Deferred Revenue declines, which appears as a negative entry on the CFS. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Why is Accounts Receivable (AR) an Asset, but Deferred Revenue (DR) a Liability?"
      ,"Answer":"Accounts Receivable is an Asset because it corresponds to future cash payments that customers are expected to make. An Asset is something that will result in additional cash in the future, or that can be sold for cash, so AR qualifies. Deferred Revenue is a Liability because it will cost the company cash in the future. The company has already collected all the cash associated with this future revenue. So, in the future, when it finally delivers the product or service, it will have to spend something on the delivery and will also have to pay taxes on the revenue it records. While AR and DR may seem similar, they are the opposites of each other: AR has not yet been collected in cash but has been delivered, whereas DR has been collected in cash, but has not yet been delivered. "
    },
    {
       "Type":"Accounting"
      ,"Question":"How are Prepaid Expenses, Accounts Payable and Accrued Expenses different, and why are Prepaid Expenses an Asset?"
      ,"Answer":" The difference is very similar to the one above for AR and DR. Access the Rest of the IB Interview Guide 71 of 99 http://breakingintowallstreet.com Prepaid Expenses have already been paid out in cash but have not yet been incurred as expenses, so they have not appeared on the Income Statement. When they do finally appear on the Income Statement, they’ll reduce the company’s future taxes, making them an Asset. Accounts Payable have not yet been paid out in cash but have been incurred as expenses, so they have appeared on the Income Statement. When the company finally pays them in cash, Accounts Payable will reduce the company’s cash, making them a Liability. Accounts Payable and Accrued Expenses work in exactly the same way, but Accounts Payable is used for specific items with invoices (e.g., legal bills), whereas Accrued Expenses is more for monthly, recurring items without invoices (e.g., utilities)."
    },
    {
       "Type":"Accounting"
      ,"Question":". Your CFO wants to start paying employees mostly in stock-based compensation, under the logic that it will reduce the company’s taxes, but not “cost it” anything in cash. Is he correct?"
      ,"Answer":"And how does Stock-Based Compensation impact the statements? The CFO is partially correct. Yes, stock-based compensation is a non-cash expense that reduces a company’s taxes but gets added back on the CFS, similar to Depreciation. However, unlike Depreciation or Amortization, Stock-Based Compensation incurs a real cost to the company and its investors because it creates additional shares. In other words, if the existing investors own 99% of the company’s shares, those investors might own only 97% or 98% after SBC is issued. Thus, Stock-Based Compensation makes the company less valuable to the existing investors, even though, on paper, it seems to be just like any other non-cash expense. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A junior accountant in your department asks about the different ways to fund the company’s operations and how they impact the financial statements. What do you tell him?"
      ,"Answer":" The two main methods of funding a company’s operations are debt and equity. Debt is cheaper for most companies (see the previous lessons and guides on WACC and the Discount Rate), so most companies prefer to use debt… up to a reasonable level. Both equity and debt issuances show up on only the Cash Flow Statement initially (in Cash Flow from Financing), and they boost the company’s cash balance. Access the Rest of the IB Interview Guide 72 of 99 http://breakingintowallstreet.com The only “after-effect” of equity is that the company’s share count increases. This happens because any investor who buys the company’s equity now owns a percentage of the company. With debt, the company must pay interest, which will be recorded on its Income Statement, reducing its Net Income and Cash, and it must eventually pay back the full balance. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Your company sells equipment for $85. The equipment was listed at $100 on your company’s Balance Sheet, so you have to record a Loss of $15 on the Income Statement, which gets reversed as a non-cash expense on the Cash Flow Statement. Why is this Loss considered a non-cash expense?"
      ,"Answer":" This Loss is a non-cash expense because you haven’t actually “lost” anything in cash in the current period. When you sell equipment for $85, you get $85 in cash from the buyer. It’s not as if you’ve “lost” $15 in cash because you sold the equipment at a poor price. The “Loss” refers to how you previously spent more than $85 to buy this equipment in some prior period. So, if you look at what you spent on the equipment many years ago and compare it to what you sold it for today, it seems like a “loss.” But that doesn’t matter because non-cash adjustments are based on what happens in the CURRENT PERIOD. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Your company owns an old factory that’s currently listed at $1,000 on its Balance Sheet. Why would it choose to “write down” this factory’s value, and what is the impact on the financial statements?"
      ,"Answer":"A company might write down an Asset if its value has declined substantially, and it’s no longer accurate to reflect it at the original value on the Balance Sheet. For example, maybe the factory is damaged by a hurricane or new technology makes the factory obsolete. On the statements, you record this write-down as an expense on the Income Statement, but you add it back as a non-cash expense on the Cash Flow Statement. The result is that the company’s cash balance increases due to the tax savings. Access the Rest of the IB Interview Guide 73 of 99 http://breakingintowallstreet.com On the Balance Sheet, Cash is up, this Asset’s value is down, and Retained Earnings will balance the change on the Assets side because Net Income has decreased. "
    },
    {
       "Type":"Accounting"
      ,"Question":"The CFO of your firm recently unveiled plans to purchase short and long-term investments. Why would she want to do this, and how would this activity affect the statements?"
      ,"Answer":"A company might want to purchase investments if it has excess cash and cannot think of other ways to use it. For example, the company can’t reinvest the cash into hiring more employees, buying more equipment or factories, or acquiring other companies or assets, and it also doesn’t want to distribute the cash to investors via dividends or repay its debt. The initial purchase of these investments will show up only on the Cash Flow Statement and will reduce the company’s cash flow. Afterward, the Interest Income earned on these investments will appear on the Income Statement and boost the company’s Pre-Tax Income, Net Income, and its Cash balance. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Could a company ever have negative Equity on its Balance Sheet? If no, why not? If yes, what would it mean?"
      ,"Answer":" Yes, easily. Think about a company that starts losing massive amounts of money, resulting in a negative Net Income. After many years, negative Net Income could easily turn the company’s Equity negative. This might also happen if the company issues a huge dividend to its owners (e.g., following a leveraged buyout) that turns Equity negative. The “meaning” varies based on what has happened, but negative Equity is almost always a negative sign because it means the company has been unprofitable or has done something irresponsible with its dividends or share repurchases. Negative Equity is also common for tech and biotech startups that record massive losses in their early years due to high spending and no revenue. Access the Rest of the IB Interview Guide 74 of 99 http://breakingintowallstreet.com "
    },
    {
       "Type":"Accounting"
      ,"Question":"Your firm recently acquired another company for $1,000 and created Goodwill of $400 and Other Intangible Assets of $200 on the Balance Sheet. A junior accountant in your department asks you why the company did this – what would you tell him?"
      ,"Answer":" You need to create Goodwill and Other Intangible Assets after an acquisition takes place to ensure that the Balance Sheet balances. In an acquisition, you write down the seller’s Shareholders’ Equity and then combine its Assets and Liabilities with those of the acquirer. If you’ve paid exactly what the seller’s Shareholders’ Equity is worth – e.g., you paid $1,000 in cash and the seller has $1,000 in Equity, then there are no problems. The combined cash balance will decrease by $1,000, and so will the combined Equity. However, in real life, this almost never happens. Companies almost always pay premiums for companies they acquire, which means that the Balance Sheet will go out of balance. For example, if the seller here had $400 in Equity instead, the BS would go out of balance immediately because we wipe out $400 in Equity but spend $1,000 in cash. To fix that problem, you start by allocating value to the seller’s “identifiable intangible assets” such as patents, trademarks, intellectual property, and customer relationships. In this case, we allocated $200 to these items. If there’s still a gap remaining after that, you allocate the rest to Goodwill, which explains the $400 in Goodwill here. "
    },
    {
       "Type":"Accounting"
      ,"Question":"How do Goodwill and Other Intangible Assets change over time?"
      ,"Answer":" Goodwill remains constant unless it is “impaired,” i.e., the acquirer decides that the acquired company is worth far less and therefore writes down the Goodwill. That appears as an expense on the Income Statement and a non-cash adjustment on the Cash Flow Statement. Other Intangible Assets amortize over time (unless they are indefinite-lived), and that Amortization shows up on the Income Statement and as a non-cash adjustment on the Cash Flow Statement. The balance decreases until it has amortized completely."
    },
    {
       "Type":"Accounting"
      ,"Question":"Walk me through the 3 financial statements when a company’s operating expenses increase by $100."
      ,"Answer":" • Income Statement: Operating Expenses are up by $100, so Pre-Tax Income is down by $100 and Net Income is down by $60 at a 40% tax rate. Access the Rest of the IB Interview Guide 76 of 99 http://breakingintowallstreet.com • Cash Flow Statement: Net Income is down by $60. There are no other changes, so cash is down by $60 at the bottom. • Balance Sheet: Cash is down by $60, so the Assets side is down by $60, and Retained Earnings on the L&E side is down by $60 due to the reduced Net Income, so both sides balance. • Intuition: Nothing; it’s a simple cash expense. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company’s Depreciation increases by $10. What happens on the 3 financial statements?"
      ,"Answer":"• Income Statement: Pre-Tax Income falls by $10, and Net Income falls by $6 assuming a 40% tax rate. • Cash Flow Statement: Net Income is down by $6, but you add back the $10 in Depreciation since it’s non-cash, so cash flow is up by $4, and cash at the bottom is up by $4. • Balance Sheet: Cash is up by $4, but PP&E is down by $10 due to the added Depreciation, so the Assets side is down by $6. The L&E side is also down by $6 because Net Income fell by $6, which reduced Retained Earnings, so both sides balance. • Intuition: The company saves on taxes with a non-cash expense. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company runs into financial distress and needs cash immediately. It sells a factory that’s listed at $100 on its Balance Sheet for $80. What happens on the 3 statements?"
      ,"Answer":"• Income Statement: You record a Loss of $20 on the Income Statement, which reduces Pre-Tax Income by $20 and Net Income by $12 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $12, but you add back the $20 Loss since it’s non-cash. You also show the full proceeds received, $80, in Cash Flow from Investing, so cash at the bottom is up by $88. Access the Rest of the IB Interview Guide 77 of 99 http://breakingintowallstreet.com • Balance Sheet: Cash is up by $88, but PP&E is down by $100, so the Assets side is down by $12. The L&E side is also down by $12 because Retained Earnings fell by $12 due to the Net Income decrease, so both sides balance. • Intuition: The company gets the $80 in cash proceeds, but it also gets $8 in tax savings from the Loss, so its cash goes up by $88 rather than $8. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company decides to CHANGE a key employee’s compensation. It will offer the employee stock options instead of a real salary. The employee’s salary was formerly $100, but she will receive $120 in stock options now. How do the statements change?"
      ,"Answer":" You can think of this one as operating expenses going up by $20, but the company also having $120 in additional non-cash expenses. • Income Statement: Operating expenses increase by $20, so Pre-Tax Income falls by $20, and Net Income falls by $12 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $12, but you add back the $120 in SBC as a non-cash expense, so cash at the bottom is up by $108. • Balance Sheet: Cash is up by $108, so the Assets side is up by $108. On the L&E side, Retained Earnings is down by $12 because of the reduced Net Income, but Common Stock & APIC is up by $120 because of the SBC, so the L&E side is up by $108 and both sides balance. • Intuition: The company saves a lot of cash by not paying the employee in cash anymore, and it also realizes tax savings. Just remember that its share count will also increase."
    },
    {
       "Type":"Accounting"
      ,"Question":"Your company just acquired another one for $1,000 in cash. The other company’s Shareholders’ Equity was $500, and you identified $100 in Other Intangible Assets with a useful life of 5 years. What happens on the 3 statements from just AFTER the acquisition closes to the end of the first year following the acquisition?"
      ,"Answer":"Only factor in Goodwill and Other Intangible Assets. Access the Rest of the IB Interview Guide 78 of 99 http://breakingintowallstreet.com In this scenario, the “gap” between the purchase price and the other company’s Shareholders’ Equity is $500. $100 in Other Intangible Assets and $400 in Goodwill will be created. The Intangibles will amortize $20 per year over 5 years. • Income Statement: Amortization increases by $20, which reduces Pre-Tax Income by $20 and Net Income by $12 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $12, but you add back the $20 in Amortization as a non-cash expense, so cash at the bottom is up by $8. • Balance Sheet: Cash is up by $8, but Other Intangible Assets are down by $20, so the Assets side is down by $12. On the L&E side, Retained Earnings is down by $12 due to the reduced Net Income, so both sides are down by $12. • Intuition: The non-cash Amortization expense increases the company’s cash balance by reducing its tax burden. "
    },
    {
       "Type":"Accounting"
      ,"Question":"In the second year, the acquisition goes horribly wrong, and your company realizes the acquired company is worth only about half of what it paid. So, it decides to write down half the Goodwill created in the deal – how do the 3 statements change, and what is the balance after the write-down?"
      ,"Answer":"$400 in Goodwill was created in this deal, so $200 will be left afterward. • Income Statement: You record a $200 Goodwill write-down, which reduces Pre-Tax Income by $200 and Net Income by $120 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $120, but you add back the $200 Goodwill write-down since it’s non-cash, so cash at the bottom is up by $80. • Balance Sheet: Cash is up by $80, but Goodwill is down by $200, so the Assets side is down by $120. On the L&E side, Retained Earnings is down by $120 due to the reduced Net Income. There are no other changes, so both sides are down by $120 and balance. • Intuition: The Goodwill write-down is a non-cash expense that reduces the company’s tax burden, which boosts its cash balance. Access the Rest of the IB Interview Guide 79 of 99 http://breakingintowallstreet.com • Advanced Note: Write-downs of Goodwill created from acquisitions are often NOT deductible for cash-tax purposes, so a DTA/DTL might be involved in real life. Do NOT bring up this point voluntarily in an interview. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Walk me through what happens on the statements when a customer orders a product for $100 but doesn’t pay for it in cash, and then what happens when the cash is finally collected. This scenario corresponds to Accounts Receivable increasing by $100 and then decreasing by $100."
      ,"Answer":" First, here’s what happens when it increases: • Income Statement: Revenue increases by $100, so Pre-Tax Income is up by $100 and Net Income is up by $60 at a 40% tax rate. • Cash Flow Statement: Net Income is up by $60, but the increase in AR reduces cash flow by $100, so cash at the bottom is down by $40. • Balance Sheet: Cash is down by $40, but AR is up by $100, so the Assets side is up by $60. On the L&E side, Retained Earnings is up by $60 due to the increased Net Income, so both sides are up by $60 and balance. • Intuition: The company has to pay taxes on revenue it hasn’t yet received in cash, so its cash balance falls. And when the AR is collected (factoring in ONLY this step): • Income Statement: No changes. • Cash Flow Statement: AR decreases, which is a change of positive $100 since it means the company has collected the cash now. Cash at the bottom is up by $100. • Balance Sheet: Cash is up by $100, but AR is down by $100, so the Assets side doesn’t change. The L&E side also doesn’t change, so both sides remain in balance. • Intuition: This is a simple cash collection of a payment owed to the company. Access the Rest of the IB Interview Guide 80 of 99 http://breakingintowallstreet.com "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company prepays its rent ($20 per month) a month in advance. Walk me through what happens on the statements when the company prepays the expense, and then what happens when the expense is incurred. This scenario corresponds to Prepaid Expenses increasing and then decreasing."
      ,"Answer":"First, the increase: • Income Statement: No changes. • Cash Flow Statement: The $20 Increase in Prepaid Expense reduces the company’s cash flow by $20, so cash at the bottom is down by $20. • Balance Sheet: Cash is down by $20, but Prepaid Expenses is up by $20, so the Assets side doesn’t change. The L&E side also doesn’t change, so the Balance Sheet remains balanced. • Intuition: This is a simple cash payment for expenses that have not yet been incurred. And then when Prepaid Expenses decrease (factoring in ONLY this step): • Income Statement: Operating Expenses increase by $20, so Pre-Tax Income falls by $20, and Net Income falls by $12 assuming a 40% tax rate. • Cash Flow Statement: Net Income is down by $12, but the reduction in Prepaid Expenses boosts cash flow by $20, so cash at the bottom is up by $8. • Balance Sheet: Cash is up by $8, and Prepaid Expenses are down by $20, so the Assets side is down by $12. The L&E side is also down by $12 because Retained Earnings has dropped by $12 due to the reduced Net Income, so both sides balance. • Intuition: Cash goes up because this $20 expense is “non-cash” at this point – the company has paid for it in cash in a prior period – so it saves the company on taxes."
    },
    {
       "Type":"Accounting"
      ,"Question":"Wal-Mart buys $500 in Inventory for products it will sell next month. Walk me through what happens on the statements when they first buy the Inventory, and then when they sell the products for $600. Access the Rest of the IB Interview Guide 81 of 99 http://breakingintowallstreet.com The first part is a simple Inventory purchase, and the second part is more of a “multi-step scenario” where the company has to record COGS and the revenue associated with the product sales."
      ,"Answer":" Here’s the first part: • Income Statement: No changes. • Cash Flow Statement: The $500 Inventory increase reduces the company’s cash flow, so cash at the bottom is down by $500. • Balance Sheet: Cash is down by $500, but Inventory is up by $500, so the Assets side doesn’t change. The L&E side also doesn’t change, so the Balance Sheet remains in balance. • Intuition: This is a simple cash purchase for an expense that has not yet been incurred. And then here’s the next part (factoring in ONLY this step): • Income Statement: Revenue is up by $600, but COGS is up by $500, so Pre-Tax Income is up by $100 and Net Income is up by $60 at a 40% tax rate. • Cash Flow Statement: Net Income is up by $60, but the decrease in Inventory increases cash flow by $500, so cash at the bottom is up by $560. • Balance Sheet: Cash is up by $560, but Inventory is down by $500, so the Assets side is up by $60. The L&E side is also up by $60 because Net Income was up by $60, and so Retained Earnings was up by $60; therefore, both sides balance. • Intuition: Look at the CUMULATIVE change – if you trace through both steps 1 and 2, cash is up by $60 from start to finish. And that increase corresponds to the company’s after-tax profit from a $100 pre-tax profit on the sale of these goods. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Amazon.com decides to pay several key vendors on credit and make them wait for the cash. It offers $200 in credit and says it will pay them in cash in a month. What happens on the financial statements when the expense is incurred, and then when it is paid in cash? This scenario corresponds to Accounts Payable or Accrued Expenses increasing by $200 and then decreasing by $200 when they’re finally paid out in cash. Access the Rest of the IB Interview Guide 82 of 99 http://breakingintowallstreet.com"
      ,"Answer":"• Income Statement: Operating Expenses increases by $200, so Pre-Tax Income is down by $200 and Net Income is down by $120, assuming a 40% tax rate. • Cash Flow Statement: Net Income is down by $120, but AP increasing by $200 results in higher cash flow since it means the expenses haven’t been paid in cash yet. So, cash at the bottom is up by $80. • Balance Sheet: Cash is up by $80, so the Assets side is up by $80. On the L&E side, AP is up by $200, but Retained Earnings is down by $120 due to the reduced Net Income, so the L&E side is up by $80 and both sides balance. • Intuition: This expense is acting like a “non-cash charge” at this point because it reduces the company’s taxes but doesn’t cost them anything in cash. Cash is up because of the lower taxes. And then here’s the next step (factoring in ONLY this step): • Income Statement: No changes. • Cash Flow Statement: Accounts Payable decreasing by $200 reduces the company’s cash flow by $200, so cash at the bottom is down by $200. • Balance Sheet: Cash is down by $200, so the Assets side is down by $200, and AP is down by $200, so the L&E side is also down by $200 and both sides balance. • Intuition: This is a simple cash payment for an owed expense. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Salesforce.com sells a customer a $100 per month subscription but makes the customer pay all in cash, upfront, for the entire year. What happens on the statements? This scenario corresponds to Deferred Revenue – collecting cash, but not being able to recognize it as revenue yet. The payment for the entire year is $1,200."
      ,"Answer":"• Income Statement: No changes. • Cash Flow Statement: DR increasing by $1,200 will boost the company’s cash flow, so cash at the bottom is up by $1,200. Access the Rest of the IB Interview Guide 83 of 99 http://breakingintowallstreet.com • Balance Sheet: Cash is up by $1,200, so the Assets side is up by $1,200, and Deferred Revenue is up by $1,200, so the L&E side is up by $1,200, and both sides balance. • Intuition: This is a simple cash inflow for services the company has not yet delivered. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Now what happens after one month has passed, and the company has delivered one month of service? Assume there are no associated COGS or Operating Expenses, and walk through what happens ONLY in this month."
      ,"Answer":"• Income Statement: Revenue is up by $100, so Pre-Tax Income is up by $100 and Net Income is up by $60, assuming a 40% tax rate. • Cash Flow Statement: Net Income is up by $60, but the decrease in Deferred Revenue reduces cash flow by $100, so cash at the bottom is down by $40. • Balance Sheet: Cash is down by $40, so the Assets side is down by $40. On the L&E side, DR is down by $100, but Retained Earnings is up by $60 because of the increased Net Income, so the L&E side is down by $40 and the Balance Sheet balances. • Intuition: Cash goes down because the company now has to pay taxes on non-cash revenue: it collected the cash in some prior period, and now it has to pay taxes on it. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company issues $100 in stock to new investors to fund its operations. How do the statements change?"
      ,"Answer":"• Income Statement: No changes. • Cash Flow Statement: The $100 stock issuance is a cash inflow in Cash Flow from Financing, and there are no other changes, so cash at the bottom goes up by $100. • Balance Sheet: Cash is up by $100, so the Assets side is up by $100, and Common Stock & APIC on the other side goes up by $100, so the L&E side is up by $100 and the BS balances. Access the Rest of the IB Interview Guide 84 of 99 http://breakingintowallstreet.com • Intuition: This is a simple cash inflow that doesn’t impact the company’s taxes at all. "
    },
    {
       "Type":"Accounting"
      ,"Question":"This same company now realizes that it has too much cash, so it wants to issue dividends or repurchase shares. How do they impact the 3 statements differently? Assume $100 in dividends vs. $100 in shares repurchases."
      ,"Answer":"These changes both make a very similar impact; the main difference is that dividends do not reduce the shares outstanding, but a share repurchase does. • Income Statement: No changes. • Cash Flow Statement: Both of these will show up as negative $100 entries in Cash Flow from Financing, reducing the cash at the bottom of the CFS by $100. • Balance Sheet: Cash is down by $100, so the Assets side is down by $100; on the L&E side, dividends will reduce Retained Earnings by $100, whereas a share repurchase will reduce Treasury Stock by $100. But in either case, Equity is down by $100, so the L&E side is down by $100 and both sides balance. • Intuition: These are simple uses of cash that don’t affect the company’s taxes at all. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company has $1,000 in revenue, $200 in COGS, and $700 in operating expenses, and no other expenses. Walk through what happens on the 3 statements if half of the company’s Income Taxes shift from current to deferred."
      ,"Answer":"First, you have to calculate the company’s total tax bill: $1,000 in revenue minus $200 in COGS minus $700 in operating expenses equals $100 in Pre-Tax Income and $40 in taxes at a 40% tax rate. • Income Statement: Nothing changes because you record BOTH current AND deferred taxes as part of the company’s Income Taxes here. So, there’s still $40 of Income Taxes. • Cash Flow Statement: Net Income stays the same, but now you have to add back $20 in the Deferred Income Tax line item because these taxes will be paid in some future period. Cash increases by $20 as a result. Access the Rest of the IB Interview Guide 85 of 99 http://breakingintowallstreet.com • Balance Sheet: Cash is up by $20, and so the Assets side is up by $20. On the L&E side, the Deferred Tax Liability will increase by $20 because of this deferral, so both sides increase by $20 and the Balance Sheet balances. • Intuition: This is a simple deferral of a cash expense into a future period, so the company’s cash increases in the short term."
    },
    {
       "Type":"Accounting"
      ,"Question":"A company buys a factory for $100 using $100 of debt. What happens INITIALLY on the statements? 2. One year passes. The company pays 10% interest on its debt, and it depreciates $10 on the factory each year. It also repays $20 of the loan each year. What happens on the statements in this first year? 3. Another year passes. Again, the company pays 10% interest on its debt based on the balance at the start of the year, and it depreciates $10 on the factory, with $20 loan principal repayment. At the very END of the year, a dragon attacks the factory, and it falls apart. The company has to write down the factory’s entire value and repay the remaining loan balance. Walk me through what happens on the statements from the BEGINNING of Year 2 to the END."
      ,"Answer":"• Income Statement: No changes. • Cash Flow Statement: There’s no net change in cash because the $100 factory purchase counts as CapEx, which reduces cash flow, and the $100 debt issuance is a cash inflow. • Balance Sheet: PP&E is up by $100, so the Assets side is up by $100, and Debt is up by $100, so the L&E side is up by $100, and the Balance Sheet stays balanced. • Intuition: This is a simple debt issuance and PP&E purchase, neither of which affects the company’s taxes 2. 10% interest corresponds to $10 in interest since we use the beginning debt balance to calculate interest. So: • Income Statement: You record $10 in interest and $10 in Depreciation, so Pre-Tax Income falls by $20, and Net Income falls by $12 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $12, but the $10 in Depreciation is noncash, so you add it back. The $20 loan repayment counts as a cash outflow, so cash at the bottom of the CFS is down by $22. • Balance Sheet: Cash is down by $22, and PP&E is down by $10, so the Assets side is down by $32. On the L&E side, the Debt is down by $20 and Retained Earnings is down by $12 due to the reduced Net Income, so the L&E side is also down by $32 and both sides balance. • Intuition: Cash declines mostly because of the principal repayment; the interest expense is offset a bit by the tax savings from the Depreciation. 3. Remember that the company only has $80 in debt remaining at the start of Year 2, so the interest expense will be 10% * $80, or $8, rather than $10. The initial PP&E is $90, but $10 of that gets depreciated, and the remaining $80 is written down. Although there’s $20 of debt repayment, it’s better to think of this as $80 during the entire year because there’s $20 in “normal” repayment and then $60 at the end of the year. Access the Rest of the IB Interview Guide 87 of 99 http://breakingintowallstreet.com • Income Statement: You record $10 in Depreciation, $8 in interest expense, and $80 for the PP&E write-down, so Pre-Tax Income falls by $98, and Net Income falls by $59 (technically $58.8, but we’re rounding). • Cash Flow Statement: Net Income is down by $59, but the Depreciation and the WriteDown are both non-cash, so you add back a total of $90. Cash is up by $31 so far. Then you factor in the loan repayments – a total of $80 – and cash is therefore down by $49. • Balance Sheet: Cash is down by $49, and PP&E is down by $90, so the Assets side is down by $139. On the L&E side, Debt is down by $80 and Retained Earnings is down by $59 due to the reduced Net Income, so the L&E side is down by $139 and both sides balance. • Intuition: Again, cash is down significantly mostly because of the loan repayment; everything else makes a minor impact. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Wal-Mart orders $200 of Inventory but pays for it using debt. What happens on the statements immediately after this transaction? 5. A year passes, and Wal-Mart sells the $200 of Inventory for $400. However, it also has to hire additional employees for $100 to process the orders. The company also pays 5% interest on its debt and repays 10% of the principal. What happens on the statements over the course of THIS one year?"
      ,"Answer":"• Income Statement: No changes. • Cash Flow Statement: Inventory is up by $200, which reduces cash flow by $200, but the debt issuance boosts cash flow by $200, so there’s no net change in cash. • Balance Sheet: The Assets side is up by $200 because Inventory is up by $200. The L&E side is also up by $200 because Debt is up by $200, so both sides balance. • Intuition: This is a simple cash payment for an expense not yet incurred, combined with a debt issuance that offsets the cash outflow. 5. Access the Rest of the IB Interview Guide 88 of 99 http://breakingintowallstreet.com This question is the standard “Sell inventory for a certain amount of revenue” one, but there are a few twists. For one, we also have to factor in $100 of additional Operating Expenses. Also, we have to include the $10 interest expense on the debt ($200 * 5%) and the $20 principal repayment ($200 * 10%). • Income Statement: Revenue is up by $400, but COGS is up by $200, and Operating Expenses are up by $100 because of the extra employees. There is also $10 of additional Interest Expense because of the 5% interest rate on $200 of debt, so Pre-Tax Income is up by $90. Net Income is up by $54 at a 40% tax rate. • Cash Flow Statement: Net Income is up by $54, and the company’s COGS decreasing by $200 frees up an additional $200 of cash flow. So far, cash flow is up by $254. The company also has to repay 10% * $200, or $20, of the debt principal, and so cash at the bottom is up by $234. • Balance Sheet: Cash is up by $234, but Inventory is down by $200, so the Assets side is up by $34. On the L&E side, Debt is down by $20, and Retained Earnings is up by $54 because of the increased Net Income, so the L&E side is up by $34 and both sides balance. • Intuition: The company has bought goods, turned them into finished products, and profited from the sale. The company’s cash goes up by less than expected because of the debt principal repayment and interest. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company issues $100 in Preferred Stock to buy $100 in long-term investments in real estate. The Preferred Stock has a coupon rate of 8%, and the long-term investments yield 10%. What happens on the statements IMMEDIATELY after the initial purchase? 7. What happens on the statements after a year? Although you subtract Preferred Dividends from Net Income to calculate Net Income to Common, the Preferred Dividends are NOT tax-deductible. 8. Another year passes, and prices in this real estate market double. The company decides to sell its $100 in long-term investments for $200 at the end of Year 2. It then uses the proceeds to repay its Preferred Stock. What happens on the statements from the BEGINNING of Year 2, including the interest/investment income and Preferred Dividends, to the END of Year 2?"
      ,"Answer":" • Income Statement: No changes. • Cash Flow Statement: The purchase of the long-term investments counts as an Investing activity and reduces cash flow by $100, but the Preferred Stock issuance boosts cash flow by $100, so there’s no net change in cash. • Balance Sheet: Long-Term Investments is up by $100, so the Assets side is up by $100, and Preferred Stock on the other side is up by $100, so the L&E side is up by $100 and both sides balance. Access the Rest of the IB Interview Guide 89 of 99 http://breakingintowallstreet.com • Intuition: This is a simple cash purchase of investments funded by a Preferred Stock issuance, and neither event affects the company’s taxes. 7. • Income Statement: The company will record 10% * $100, or $10, in Interest Income on the real estate, so its Pre-Tax Income increases by $10. At a 40% tax rate, its Net Income goes up by $6. The $8 in Preferred Dividends are NOT tax-deductible, so they simply reduce Net Income by $8, and so “Net Income to Common” is down by $2. • Cash Flow Statement: Net Income to Common is down by $2. There are no other changes on the CFS in this period because there’s no principal repayment of the Preferred Stock, and nothing changes with the long-term investments. So, cash at the bottom is down by $2. • Balance Sheet: Cash is down by $2, so the Assets side is down by $2. On the other side, Retained Earnings is down by $2, so the L&E side is also down by $2 and both sides balance. • Intuition: The point of this question is that taxes play a huge role in making investment decisions. Since the investment income on the real estate is taxable, whereas Preferred Dividends are not, the company LOSES money! The after-tax yield of the real estate is only 10% * (1 – 40%), or 6%, which is less than the 8% Preferred coupon. 8.  • Income Statement: Everything from the previous part still applies, so there’s still $10 in Investment Income. But now the company also records a Gain of $100 on the sale of the Access the Rest of the IB Interview Guide 90 of 99 http://breakingintowallstreet.com real estate, so Pre-Tax Income is up by $110, and Net Income is up by $66 at a 40% tax rate. There’s still $8 in Preferred Dividends, so Net Income to Common is up by $58. • Cash Flow Statement: Net Income to Common is up by $58, but the $100 Gain is noncash, so you subtract it out and then show the Total Proceeds Received, $200, within Cash Flow from Investing. You also have to show the $100 repayment of the Preferred Stock, so cash at the bottom is up by $58. • Balance Sheet: Cash is up by $58, but the company’s long-term investments have decreased by $100, so the Assets side is down by $42. The L&E side is also down by $42 because Retained Earnings increased by $58 due to the increased Net Income to Common, but Preferred Stock decreased by $100, so both sides balance. • Intuition: This question demonstrates why this investment strategy might make sense: capital gains. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Your company wants to boost its EPS artificially, so it decides to issue debt and use the proceeds to buy back shares. Initially, the company has 100 shares outstanding at $100 per share, and a Net Income of $2,000. What happens IMMEDIATELY after your company raises $1,000 in long-term debt and uses it to repurchase $1,000 in stock? 10. What happens after a year passes if the company pays 5% interest on the debt and repays 10% of the principal? Also, explain the EPS impact."
      ,"Answer":"First, note a few important facts about this scenario. Repurchasing $1,000 in stock at a share price of $100 per share means that the company will repurchase 10 shares. So, its share count drops from 100 to 90. Its EPS before this move was $2,000 / 100, or $20.00. Now, for the first part of this transaction: • Income Statement: No changes. • Cash Flow Statement: The $1,000 Debt issuance boosts cash flow by $1,000, but the $1,000 stock repurchase reduces it by $1,000, so there’s no net change in cash. • Balance Sheet: There are no changes on the Asset side. On the L&E side, Debt is up by $1,000, but Treasury Stock within Equity is down by $1,000, so there’s no net change, and the BS remains in balance. Access the Rest of the IB Interview Guide 91 of 99 http://breakingintowallstreet.com • Intuition: These are simple cash inflows and outflows that cancel each other out and make no impact on the company’s taxes. 10. This question is a twist on the standard 3-statement accounting questions because you also have to calculate EPS and the change in EPS. • Income Statement: The company records 5% * $1,000, or $50, in interest expense, and so its Pre-Tax Income falls by $50. At a 40% tax rate, its Net Income is down by $30. The company now has 90 shares outstanding rather than 100, and has Net Income of $1,970 instead of $2,000, so its EPS increases to $21.89 (If you can’t do that math in your head, you could just say that EPS “increases”). • Cash Flow Statement: Net Income is down by $30, and the company also has to repay 10% of the principal, or $100, so cash is down by $130 at the bottom. • Balance Sheet: Cash is down by $130, so the Assets side is down by $130. On the L&E side, Retained Earnings is down by $30 because of the reduced Net Income, and Debt is down by $100 because of the principal repayment, so the L&E side is down by $130 and both sides balance. • Intuition: This question illustrates how companies can artificially inflate their EPS numbers by making nonsensical moves, such as borrowing at high costs to fund share repurchases. Never trust EPS! "
    },
    {
       "Type":"Accounting"
      ,"Question":"Your company decides to acquire another company for $1,000, using cash. The other company has $400 in Cash, $600 in PP&E, $250 in Accounts Payable, and $750 in Equity. What happens to your company’s BALANCE SHEET immediately after this acquisition takes place? Assume that your company has identified $50 in Other Intangible Assets with a useful life of 10 years. 12. A year passes. What happens on the financial statements, factoring in ONLY the newly created items from the acquisition and the cash used to acquire the company? Assume a 2% foregone interest rate on cash, and assume that the company loses interest on the FULL $1,000 of cash used in the acquisition, not just the net cash reduction of $600. 13. At the end of the year, your company decides that it grossly overpaid for the other company, so it decides to write down the Goodwill and PP&E acquired from the other company by 50%. What happens on the statements, factoring in ONLY these write-downs and nothing else? Remember that there’s $200 in Goodwill and $600 in PP&E from the other company:"
      ,"Answer":" Access the Rest of the IB Interview Guide 92 of 99 http://breakingintowallstreet.com You combine the other company’s Assets and Liabilities with your company’s, and you write down the seller’s Equity. So, in this case, the combined company’s Cash balance goes down by $600 since you spent $1,000 in cash on the acquisition but got $400 in cash from the other company. PP&E is up by $600, so the Assets side hasn’t changed so far. But the other side is up by $250 because of the Accounts Payable, so we have a problem. Since we paid $1,000 for Equity of $750, we must create a total of $250 in Goodwill and Other Intangible Assets. The question stated that there’s $50 in Other Intangible Assets, so we create those on the Assets side, and then we create $200 of Goodwill. As a result, the L&E side is up by $250, the Assets side is up by $250, and the Balance Sheet balances. 12.  • Income Statement: The company’s interest income decreases by 2% * $1,000, or $20. There will also be Amortization of Intangibles of $50 / 10, or $5. So, Pre-Tax Income falls by $25, and Net Income declines by $15 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $15, but you add back the $5 in Amortization as a non-cash charge, so the company’s cash is down by $10. • Balance Sheet: Cash is down by $10, and Other Intangible Assets are down by $5, so the Assets side is down by $15. On the other side, Retained Earnings is down by $15 because of the reduced Net Income, so the L&E side is down by $15 and both sides balance. • Intuition: The main point here is that all acquisitions “cost” the company something – cash from lost interest or additional interest expense, or additional shares that dilute the existing shareholders. Access the Rest of the IB Interview Guide 93 of 99 http://breakingintowallstreet.com 13. • Income Statement: You record a total write-down of $400 ($200 / 2 + $600 / 2), so PreTax Income is down by $400. Net Income is down by $240 at a 40% tax rate. • Cash Flow Statement: Net Income is down by $240, but both these write-downs are non-cash, so you add back a total of $400. Cash is up by $160 at the bottom. • Balance Sheet: Cash is up by $160, but Goodwill is down by $100, and PP&E is down by $300, so the Assets side is down by $240. The L&E side is also down by $240 because Retained Earnings falls by $240 due to the reduced Net Income, and so both sides balance. • Intuition: This is a good example of how overpaying for an acquisition can hurt a company’s Net Income and EPS, but boost its cash balance. This is why it’s so important to look at BOTH Net Income and Cash Generated when analyzing a company"
    },
    {
       "Type":"Accounting"
      ,"Question":"What is Free Cash Flow, and what does it mean if it's positive and increasing?"
      ,"Answer":"Access the Rest of the IB Interview Guide 94 of 99 http://breakingintowallstreet.com There are different types of Free Cash Flow, but one simple definition is Cash Flow from Operations minus CapEx. FCF represents a company’s “discretionary cash flow” – how much it has left for other areas after spending what’s required for its business. You define it this way because pretty much everything in a company’s “Cash Flow from Operations” section is required for its business – earning Net Income, paying for Inventory, collecting Receivables, etc. But almost every line item within the Investing and Financing Activities sections is “optional,” except for Capital Expenditures. If FCF is positive and increasing, it means the company can spend its excess cash in different ways: it could hire more employees, spend more on Working Capital or CapEx, invest in other assets, repay debt, acquire other companies, or return money to shareholders with dividends or stock repurchases. "
    },
    {
       "Type":"Accounting"
      ,"Question":"What does FCF mean if it's negative or decreasing?"
      ,"Answer":"You have to find out why FCF is negative or decreasing first. For example, if FCF is negative because CapEx in one year was unusually high, but it’s expected to return to much lower levels in the future, it doesn’t mean much. On the other hand, if FCF is negative because the company’s sales and operating income have been declining each year, that indicates that the business may be troubled. If FCF decreases to the point where the company runs low on cash, it will have to raise equity or debt funding ASAP and restructure its operations to continue running. "
    },
    {
       "Type":"Accounting"
      ,"Question":"What is Working Capital?"
      ,"Answer":"The official definition of Working Capital is “Current Assets minus Current Liabilities,” but the more useful definition is: Working Capital = Current Assets (Excluding Cash and Investments) – Current Liabilities (Excluding Debt) This one is sometimes called Operating Working Capital instead. You may also include Long-Term Assets and Liabilities that are related to the company’s business operations (Long-Term Deferred Revenue is a prime example). Access the Rest of the IB Interview Guide 95 of 99 http://breakingintowallstreet.com Working Capital by itself tells you whether a company needs more in operational assets or operational liabilities to run its business, and how big the difference is. But the Change in Working Capital (see below) matters far more for valuation purposes. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Why do you exclude cash, investments, and debt when calculating the Change in Working Capital on the Cash Flow Statement?"
      ,"Answer":"Although many of these items are Current Assets or Current Liabilities, you exclude them because: • Cash – The bottom of the CFS already calculates the Net Change in Cash and the ending Cash balance; if you did it within the Working Capital area, you’d be double-counting it. • Investments – Investment sales and purchases are considered investing activities, not operational ones, even if they’re short-term. • Debt – Debt issuances and repayments are considered financing activities, not operational ones, even if the debt is short-term. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company's Working Capital has increased from $50 to $200."
      ,"Answer":"You calculate the Change in Working Capital by taking the new number, $200, and subtracting the old number, $50, and so the change is positive $150. But on the Cash Flow Statement, the company records the Change in Working Capital as negative $150. Is the company wrong? No, the company is correct. On the Cash Flow Statement, the Change in Working Capital is equal to Old Working Capital – New Working Capital. Pretend that Working Capital consists of ONLY Inventory. If Inventory increases from $50 to $200, that is clearly a use of cash that will reduce the company’s cash flow, and as such, it should be shown as a negative $150 on the CFS. You can also think of this one by breaking down the individual components: Change in WC = Old WC – New WC Change in WC = (Old Current Assets – Old Current Liabilities) – (New Current Assets – New Current Liabilities) Access the Rest of the IB Interview Guide 96 of 99 http://breakingintowallstreet.com Change in WC = (Old Current Assets – New Current Assets) + (New Current Liabilities – Old Current Liabilities) So, like everything else on the Cash Flow Statement, if assets increase, they reduce the cash flow. And if liabilities increase, the opposite happens. When a company’s Working Capital INCREASES, the company USES cash to do that; when Working Capital DECREASES, it FREES UP cash. "
    },
    {
       "Type":"Accounting"
      ,"Question":"What does the Change in Working Capital mean?"
      ,"Answer":"The Change in Working Capital tells you if the company needs to spend in ADVANCE of its growth, or if it generates more money as a RESULT of its growth. For example, the Change in Working Capital is almost always negative for retailers because they must spend money on Inventory before being able to sell products. But the Change in Working Capital is often positive for subscription-based companies that collect cash from customers far in advance because Deferred Revenue increases whenever they do that. The Change in Working Capital directly increases or decreases Free Cash Flow, which, in turn, directly affects the company’s valuation. "
    },
    {
       "Type":"Accounting"
      ,"Question":"You’re comparing two companies. Company A’s Change in Working Capital as a % of the Change in Revenue is 10%, but Company B’s is negative 5%. Which industries are these companies MOST likely to be in?"
      ,"Answer":"Company A is most likely in an industry without much upfront investment in Inventory required, such as professional services, software, or media and telecom. In these industries, customers often pay upfront for longer-term contracts and services, which makes the Change in Working Capital even more positive. Company B is likely in an industry with more upfront investment in Inventory required, such as retail or manufacturing. The company might also be in an industry where it has little power to “delay” payments to suppliers, meaning that its operational assets will tend to grow by more than its operational liabilities over time. Access the Rest of the IB Interview Guide 97 of 99 http://breakingintowallstreet.com "
    },
    {
       "Type":"Accounting"
      ,"Question":"What does it mean if a company's FCF is growing, but its Change in Working Capital is more and more negative each year?"
      ,"Answer":" It means that the company’s Net Income or non-cash charges are growing by more than its Change in WC is declining, or that its CapEx is becoming less negative (i.e., shrinking) by more than the Change in WC is declining. If a company’s Net Income is growing for legitimate reasons, this is a positive sign. But if higher non-cash charges or artificially reduced CapEx are boosting FCF, both of those are negatives."
    },
    {
       "Type":"Accounting"
      ,"Question":"In its filings, a company states that its EBITDA is a reasonable “proxy” for its Cash Flow from Operations. The company’s EBITDA has been positive and growing at 20% for the past three years. However, the company recently filed for bankruptcy. How could this have happened?"
      ,"Answer":"Although EBITDA is sometimes a “proxy” for CFO, it is not even close to a perfect representation of a company’s cash flow. Think about all the items that EBITDA excludes: • CapEx – Very high CapEx spending might have pushed the company to bankruptcy. • Interest Expense and Debt Repayment Obligations – Same as above. In particular, if the company’s debt all matures on one date and the company cannot refinance or does not have enough cash to pay for it, bankruptcy could result. • Working Capital – If the company is spending a massive amount on Inventory, to the point where it’s losing heaps of money as it grows, that could have also played a role. • One-Time Charges – If EBITDA excludes large “one-time” expenses such as legal and restructuring charges, those could also affect the company’s cash balance. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company’s ROA has INCREASED from 10% to 15% over the past five years, but its ROE has DECREASED from 13% to 10%. What could have caused this?"
      ,"Answer":"Both ROA and ROE have Net Income in the numerator, so it must be something in the denominators. Let’s say that Net Income increased over this period. If that’s the case, then the company’s Total Assets must have increased by a lower percentage than Net Income. Access the Rest of the IB Interview Guide 98 of 99 http://breakingintowallstreet.com But if ROE decreased, then the company’s Equity must have increased by a greater percentage than Net Income. So, one potential cause might be that the company has been continually issuing equity to fund its cash flow-negative business. When the company issues stock, it boosts its Equity on the Balance Sheet and prevents its cash balance from declining. But the company’s Total Assets also don’t change by much because the cash raised does not make it to the Balance Sheet – it offsets losses elsewhere in the business. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company seems to be boosting its ROE artificially by using leverage to fuel its growth. Which metrics or ratios could you look at to confirm or deny your suspicion?"
      ,"Answer":" Leverage can artificially boost ROE because Debt does not affect the denominator of ROE (Equity), and it makes only a small impact on the numerator (Net Income). To see if this is happening, you could check the company’s Debt/EBITDA and EBITDA/Interest ratios – if they indicate that the company has been using more debt over time, it’s a good bet that Debt has been at least partially responsible for the increased ROE. "
    },
    {
       "Type":"Accounting"
      ,"Question":"A company's Current Ratio is 2x. Why is that NOT necessarily a positive sign?"
      ,"Answer":"The Current Ratio is defined as Current Assets / Current Liabilities, so it depends on what’s in both those groups. For example, if the company’s Current Assets consist primarily of Receivables and almost no Cash, and its Current Liabilities consist of Accrued Expenses, a Current Ratio of 2x is negative because it means the company is waiting on a lot of cash from customers and also has to pay a lot of cash in the future for expenses already incurred. On the other hand, if the company’s Current Assets are primarily Cash and its Current Liabilities are primarily Deferred Revenue, this 2x ratio would be more positive because it means that the company has collected significant cash in advance of product/service delivery. "
    },
    {
       "Type":"Accounting"
      ,"Question":"Would you expect a retailer or an airline company to have a higher Asset Turnover Ratio?"
      ,"Answer":" Generally, the retailer will have a higher Asset Turnover Ratio (Revenue / Average Assets) because it is less dependent on assets to generate its sales. Yes, retailers need to sell Inventory Access the Rest of the IB Interview Guide 99 of 99 http://breakingintowallstreet.com to make money, but they don’t necessarily need to own their own stores, factories, etc. – many retailers actually lease their stores. An airline will tend to have a lower Asset Turnover Ratio because it is completely dependent on PP&E to generate revenue: without its planes, it can’t do much of anything. And yes, some airlines also lease their planes rather than owning them outright, but almost every major airline owns a decent percentage of its planes. "
    },
    {
       "Type":"Accounting"
      ,"Question":"What does it say about a company if its Days Receivables Outstanding is 5, but its Days Payable Outstanding is 60?"
      ,"Answer":" It tells you that the company has quite a lot of market power to collect cash from customers quickly, but to delay paying its suppliers for a long time. Examples might be companies like Amazon and Wal-Mart that completely dominate their respective markets and that can coerce suppliers into agreeing to their terms."
    },
    {
       "Type":"EV"
      ,"Question":"What do Equity Value and Enterprise Value MEAN? Don’t explain how you calculate them – tell me what they mean!"
      ,"Answer":"Equity Value represents the value of EVERYTHING the company has (i.e., ALL its Assets), but only to COMMON EQUITY INVESTORS (i.e., shareholders). Enterprise Value represents the value of the company’s CORE BUSINESS OPERATIONS (i.e., ONLY the Assets related to its core business), but to ALL INVESTORS (Equity, Debt, Preferred, and possibly others). "
    },
    {
       "Type":"EV"
      ,"Question":"So why do you look at both of them? Isn’t Enterprise Value always more accurate?"
      ,"Answer":"Neither one is “better” or “more accurate” – they represent different concepts, and they’re important to different types of investors. Enterprise Value and EV-based multiples have some advantages because they are not affected by changes in the company’s capital structure as much as Equity Value and Equity Value-based multiples are affected. However, common shareholders and institutional investors often focus on Equity Value because they care more about what a company’s shares are worth. And if you’re valuing a public company, you’ll always have to “back into” its Implied Equity Value and its Implied Share Price so you can compare that to its current share price. Access the Rest of the IB Interview Guide 72 of 95 http://breakingintowallstreet.com "
    },
    {
       "Type":"EV"
      ,"Question":"What’s the difference between Current Enterprise Value and Implied Enterprise Value?"
      ,"Answer":"Current Enterprise Value is what “the market” as a whole thinks the company’s core business operations are worth to all investors; Implied Enterprise Value is what you think it’s worth based on your views and analysis. You calculate Current Enterprise Value for public companies by starting with Current Equity Value, subtracting non-core-business Assets, and adding Liability and Equity line items that represent different investor groups. But you calculate Implied Enterprise Value based on valuation methodologies such as the Discounted Cash Flow (DCF) analysis, comparable public companies, and precedent transactions. "
    },
    {
       "Type":"EV"
      ,"Question":"Why might a company's Current Enterprise Value be different from its Implied Enterprise Value?"
      ,"Answer":"Remember that Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate). Everyone agrees on a company’s current Cash Flow, but you might disagree with the market on the Discount Rate or Cash Flow Growth Rate. In most cases, your view of a company’s value will be different than the market’s view because you believe its cash flow will grow at a faster or slower rate. "
    },
    {
       "Type":"EV"
      ,"Question":"Everyone knows how you move from Equity Value to Enterprise Value. But WHY do you subtract Cash, add Debt, add Preferred Stock, and so on?"
      ,"Answer":"You subtract Assets when they represent non-core-business Assets. Cash and Investments are examples, but Equity Investments (AKA Associate Companies), Assets Held for Sale, and Assets Associated with Discontinued Operations also count. You add Liability & Equity line items when they represent different investor groups beyond the common shareholders. Debt and Preferred Stock are the most common examples, but Unfunded Pensions and Capital Leases (among others) also qualify. "
    },
    {
       "Type":"EV"
      ,"Question":"Let's say you're about to buy a house using a $600K mortgage and a $200K down payment. What are the real-world analogies for Equity Value and Enterprise Value in this case?"
      ,"Answer":" Access the Rest of the IB Interview Guide 73 of 95 http://breakingintowallstreet.com The “Enterprise Value” here is the $800K total value of the house, and it corresponds to just the “core value” of the house: The land, the foundation, the walls, rooms, etc. The “Equity Value” is the $200K down payment you’re making, and it corresponds to everything above PLUS any “non-core” Assets you get along with the house: Random tools and garden supplies, lawn chairs, or anything else that you’re planning to sell immediately. "
    },
    {
       "Type":"EV"
      ,"Question":"Can a company's Equity Value ever be negative?"
      ,"Answer":"Trick question. A company’s Current Equity Value cannot be negative because it is based on Shares Outstanding * Current Share Price, and neither of those can be negative. It also can’t be negative for private companies. However, its Implied Equity Value can be negative because you use your assumptions to calculate that. So, if the company’s Implied Enterprise Value is $0, for example, and it has more Debt than Cash, its Implied Equity Value will be negative. "
    },
    {
       "Type":"EV"
      ,"Question":"Can a company's Enterprise Value ever be negative?"
      ,"Answer":"Yes. Both Current and Implied Enterprise Value could easily be negative – for example, a company might have more Cash than its Market Cap (Current Equity Value) and no Debt. And perhaps your Implied Enterprise Value is the same as, or very close to, its Current Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"Why do financing-related events such as issuing Dividends or raising Debt not affect Enterprise Value?"
      ,"Answer":"Because Enterprise Value reflects the value of a company’s core business operations to ALL investors in the company. That definition means that if something does not affect the company’s core business, it won’t affect Enterprise Value. Issuing Dividends, issuing Stock, repurchasing Stock, issuing/repaying Debt, etc. do not impact a company’s core business, so they do not affect Enterprise Value. Note that in reality, there will still be a small impact on Enterprise Value; this is just the theory. Access the Rest of the IB Interview Guide 74 of 95 http://breakingintowallstreet.com "
    },
    {
       "Type":"EV"
      ,"Question":"Let’s say you determine a company’s Implied Value with the cash flow formula: Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate). Will this give you a company’s Implied Equity Value or Implied Enterprise Value?"
      ,"Answer":"It depends on the type of Cash Flow and the Discount Rate you are using. If you’re using Cash Flow that’s available to ALL investors (i.e., Unlevered FCF or Free Cash Flow to Firm), and WACC for the Discount Rate, this formula will produce the Implied Enterprise Value. If you’re using Cash Flow that’s available ONLY to equity investors (i.e., Levered FCF or Free Cash Flow to Equity), and Cost of Equity for the Discount Rate, this formula will produce the Implied Equity Value. "
    },
    {
       "Type":"EV"
      ,"Question":"If financing-related events do not affect Enterprise Value, what DOES affect it?"
      ,"Answer":" Only changes to a company’s core business will affect Enterprise Value. For example, the company wins a major new customer contract, or it announces higher-than-expected sales, or it closes a factory, or it announces positive results from an expansion strategy into Africa. But remember that this is all in theory. In reality, financing changes will still make a small impact on Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"If a company wins a major contract with a new customer, will ONLY Enterprise Value change? Or will Equity Value also change?"
      ,"Answer":"Equity Value will change as well. The whole point of Equity Value is that it is affected by BOTH operational and financial changes, whereas Enterprise Value is affected by ONLY operational changes (in theory). "
    },
    {
       "Type":"EV"
      ,"Question":"Why does Enterprise Value NOT necessarily represent the \"true cost\" to acquire a company?"
      ,"Answer":" First, because the buyer may not necessarily have to repay the seller’s Debt – in 99% of cases, they do, or they have to “refinance it” by replacing it with new Debt, but there are exceptions. Second, the buyer may not “get” the seller’s entire Cash balance. The seller needs a certain minimum amount of Cash to continue operating, and so the seller’s Cash may not reduce the effective purchase price 1-for-1. Access the Rest of the IB Interview Guide 75 of 95 http://breakingintowallstreet.com Finally, the buyer has to pay additional fees for M&A advisory, accounting, legal services, and financing to acquire another company, and none of those is reflected in Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"In theory, if Companies A and B are the same in all respects, but Company A is financed with 100% Equity, and Company B is financed with 50% Equity and 50% Debt, their Enterprise Values will be the same. Why is this NOT true in reality?"
      ,"Answer":"Because a company’s capital structure, whether current, optimal, or targeted, impacts the Discount Rate you use to calculate the Implied Enterprise Value (and by extension, the Discount Rate “the market as a whole” uses to value a company for its Current Enterprise Value). Not only do the percentages of Equity, Debt, and Preferred Stock change WACC, but the Costs of all these items also change as the company’s capital structure changes. For example, more Debt will initially reduce WACC because Debt is cheaper than Equity. But past a certain point, additional Debt will start to increase WACC because the risk to all investors starts increasing at that stage. Enterprise Value will be LESS affected by capital structure changes than Equity Value, but there will still be some impact even from relatively small changes."
    },
    {
       "Type":"EV"
      ,"Question":"A company issues $200 million in new shares. How do Equity Value, Enterprise Value, EV / EBITDA, and P / E change?"
      ,"Answer":"Equity Value increases by $200 million because of the new shares, but Enterprise Value stays the same because the $200 million of extra Cash offsets the higher Equity Value. The P / E multiple increases, but EV / EBITDA stays the same. Access the Rest of the IB Interview Guide 76 of 95 http://breakingintowallstreet.com "
    },
    {
       "Type":"EV"
      ,"Question":"A company issues $200 million in new shares, but it will use $100 million from the proceeds to issue Dividends to shareholders. How does everything change?"
      ,"Answer":" In this case, Equity Value increases by $200 million but then falls by $100 million because Dividends reduce Equity Value, so Equity Value is up by only $100 million. The company ends up with $100 million in cash. Enterprise Value stays the same because, once again, the extra Cash offsets the higher Equity value. The P / E multiple increases, but by less than in the previous question, and EV / EBITDA stays the same. "
    },
    {
       "Type":"EV"
      ,"Question":"The company decides to use the $200 million to acquire another business for $100 million instead. How does everything change?"
      ,"Answer":"Once again, Equity Value increases by $200 million initially, and Enterprise Value does not change. However, after the company spends $100 million of Cash to acquire another company – a core-business Asset – its Enterprise Value will increase by $100 million. Its Equity Value will NOT change in this step because Equity Value does not distinguish between core and non-core Assets; it includes the values of all Assets. So, the company’s Equity Value increases by $200 million, its Enterprise Value increases by $100 million, and both the P / E multiple and the EV / EBITDA multiple increase. "
    },
    {
       "Type":"EV"
      ,"Question":"What if the company uses the $100 million to acquire an Asset rather than an entire company?"
      ,"Answer":"Once again, Equity Value increases by $200 million initially and does not change after the Asset acquisition because the type of Asset acquired is irrelevant to Equity Value. If this acquired Asset is a core-business Asset – for example, a factory – then the company’s Enterprise Value will increase by $100 million. If it is not – for example, a short-term investment – then the company’s Enterprise Value will not change. So regardless of the classification, the P / E multiple increases. But the EV / EBITDA multiple may or may not increase, depending on the type of Asset acquired. Access the Rest of the IB Interview Guide 77 of 95 http://breakingintowallstreet.com "
    },
    {
       "Type":"EV"
      ,"Question":"What changes with everything above if the company raises $200 million in Debt to do this instead?"
      ,"Answer":"The main difference is that Equity Value no longer changes, and so the P / E multiple no longer changes. Enterprise Value also doesn’t change because the extra Cash and extra Debt cancel each other out. However, as in the previous questions, if the company uses the Cash to acquire another company or other core-business Assets, Enterprise Value and EV / EBITDA both increase. If the company raises $200 million of Debt to issue $100 million in Dividends, Enterprise Value and EV / EBITDA will stay the same through all of that, but Equity Value will decrease by $100 million because of the Dividends, and so the P/E multiple will also decrease. "
    },
    {
       "Type":"EV"
      ,"Question":"Let’s say the company raises $200 million in Debt to acquire another company for a purchase price of $200 million. The other company’s Common Shareholders’ Equity is exactly $200 million. How does everything change?"
      ,"Answer":"In the first step – a $200 million Debt issuance – neither Equity Value nor Enterprise Value will change. In the second step – an acquisition of another company for $200 million when its CSE is also $200 million – the company’s Enterprise Value will increase by $200 million because this other company counts as a core-business Asset. So, the P / E multiple stays the same and the EV / EBITDA multiple increases. "
    },
    {
       "Type":"EV"
      ,"Question":"How is this scenario different if the purchase price is still $200 million, but the other company has only $100 million in Common Shareholders’ Equity?"
      ,"Answer":"The only difference is that now the company has to record $100 million of Goodwill (or Other Intangible Assets, or a combination of both) on its Balance Sheet. However, both of those are core-business Assets, so Enterprise Value still increases by $200 million, and everything else is the same as in the previous question. "
    },
    {
       "Type":"EV"
      ,"Question":"What happens to everything if a company issues $100 in Dividends?"
      ,"Answer":"Access the Rest of the IB Interview Guide 78 of 95 http://breakingintowallstreet.com Equity Value decreases by $100 million, but Enterprise Value stays the same because the lower Equity Value and lower Cash balance cancel each other out. Also, the Cash used to issue these Dividends is a non-core-business Asset. As a result, the P / E multiple falls, but the EV / EBITDA multiple stays the same. "
    },
    {
       "Type":"EV"
      ,"Question":"A company has a Current Equity Value of $200, $50 in Cash, and $100 in Debt. If the company spends $25 of its Cash balance to purchase PP&E, how does everything change?"
      ,"Answer":"The company’s Current Enterprise Value is: $200 + $100 – $50 = $250. Its Equity Value won’t change when it uses $25 of Cash to purchase PP&E because Cash and PP&E are the same – just Assets – from the perspective of Equity Value. Its Enterprise Value will increase by $25 because the company has converted a non-corebusiness Asset into a core-business Asset. $200 + $100 – $25 = $275, so its Enterprise Value is now $275. As a result, its P / E multiple stays the same, but its EV / EBITDA multiple increases. "
    },
    {
       "Type":"EV"
      ,"Question":"A company has excess Cash. What are the valuation implications if it uses that Cash to repurchase shares vs. repay Debt?"
      ,"Answer":"Enterprise Value won’t change for either one. The reduced Cash balance offsets the reduced Equity Value, and the reduced Cash Balance also offsets the reduced Debt balance. However, Equity Value will decrease if the company repurchases shares. So, in a share repurchase, Equity Value and the P / E multiple will fall, but in a Debt repayment, they’ll stay the same. And Enterprise Value and EV / EBITDA will stay the same for everything. "
    },
    {
       "Type":"EV"
      ,"Question":"A CEO finds $100 of Cash on the street and adds it to the company’s bank account. How do Equity Value and Enterprise Value change?"
      ,"Answer":" Equity Value will increase by $100 because you have to attribute this “free Cash” to some investor group, and Equity investors make the most sense because Equity on the Balance Sheet also represents what the company has saved up internally from its operations. Access the Rest of the IB Interview Guide 79 of 95 http://breakingintowallstreet.com Enterprise Value will not change because Cash is a non-core-business Asset, and the extra Cash offsets the higher Equity Value in the calculation. "
    },
    {
       "Type":"EV"
      ,"Question":"A company issues a press release indicating that it expects its revenue to grow at 20% rather than its previous estimate of 10%. How does everything change?"
      ,"Answer":" This represents a difference in the company’s core business: It expects higher sales growth. As a result, both its Enterprise Value and Equity Value will increase. Its Equity Value will increase because the company’s Total Assets are more valuable if they are expected to generate higher growth. And the Enterprise Value will increase because its core-business Assets are certainly more valuable if they’re expected to generate higher growth. The Intuition: If a company announces higher-than-expected growth, its share price almost always jumps up, reflecting a higher Equity Value and a higher Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"When there’s an operational change, how can you determine whether Equity Value or Enterprise Value will change by more?"
      ,"Answer":" Generally, Enterprise Value will change by more because it is affected only by these operational changes. Since Equity Value is affected by both financial and operational changes, operational changes tend to make less of an impact. "
    },
    {
       "Type":"EV"
      ,"Question":"Will operational changes impact a company’s Current or Implied Enterprise Value by more?"
      ,"Answer":"Operational changes will tend to impact a company’s Implied Enterprise Value – your estimate of the company’s value based on your views – by more because you can immediately reflect your views by revising your calculations. On the other hand, sometimes it takes time for “the market” to reflect these operational changes fully, and so the Current Enterprise Value will take more time to change."
    },
    {
       "Type":"EV"
      ,"Question":". You’ve explained that Equity Value represents the value of ALL assets. Access the Rest of the IB Interview Guide 80 of 95 http://breakingintowallstreet.com If that’s the case, why doesn’t a Debt issuance boost Equity Value? After all, if a company raises $100 in Debt, it gets $100 in extra Cash."
      ,"Answer":"This is a trick question because the interviewer doesn’t state the LAST PART of the definition: “The value of ALL assets but only to EQUITY INVESTORS.” And that last part explains this effect: When a company’s Assets increase, if that increase is funded by Debt (or any other non-equity investor), then Equity Value will not increase."
    },
    {
       "Type":"EV"
      ,"Question":"What IS a valuation multiple?"
      ,"Answer":"A valuation multiple is shorthand for a company’s value based on its cash flows, cash flow growth rate, and Discount Rate. Normally, you value a company with this formula: Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate) Instead of providing all that information, you can use a number like “10x” and express it in a condensed way. You can also think of valuation multiples as “per-square-foot” or “per-square-meter” values when buying a house: They help you compare houses, or companies, of different sizes and see how expensive or cheap similar houses, or companies, are."
    },
    {
       "Type":"EV"
      ,"Question":"A company trades at a valuation multiple of 13x EV/EBITDA (based on its Current Enterprise Value). What does that mean?"
      ,"Answer":"Access the Rest of the IB Interview Guide 81 of 95 http://breakingintowallstreet.com By itself, this number means nothing at all. It means something only in relation to other companies and their multiples. For example, if other, similar companies in the industry with similar growth profiles are trading at multiples of 10x EV/EBITDA, then this company might be overvalued. But if those other companies are trading at multiples of 16x EV/EBITDA, then perhaps this company is undervalued. A discrepancy in multiples is like a clue in a murder mystery: It points your investigation in the right direction, but it doesn’t solve the mystery by itself. "
    },
    {
       "Type":"EV"
      ,"Question":"How can you use valuation multiples in real life?"
      ,"Answer":"The most common usage is to calculate valuation multiples for similar companies (“Comparable Company Analysis” or “Public Company Comparable Analysis”) and see how the company you’re analyzing stacks up (see the previous question). But you can also use valuation multiples to determine a company’s yield. For example, if a company has a P/E multiple of 10x, that means you earn 1/10, or 10%, for each dollar you invest in its Equity. So, if you buy a share of the company for $10.00, you “get” $1.00 of Net Income (though the company won’t necessarily distribute that much in cash). This same concept applies to Enterprise Value-based multiples, but you have to assume that you purchase $1.00 of the company’s entire capital structure instead of just its shares. Finally, you can use multiples to determine a company’s implied FCF growth rate – the rate at which the market expects it to grow. Let’s say a company’s EV / EBITDA is 12x. Its Current Enterprise Value is $12,000, and its EBITDA is $1,000. Its Unlevered Free Cash Flow is $500, and the appropriate Discount Rate is 10%. Since Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), you can say: $12,000 = $500 / (10% – FCF Growth Rate) $12,000 * (10% – FCF Growth Rate) = $500 $12,000 * 10% – $12,000 * FCF Growth Rate = $500 $1,200 – $12,000 * FCF Growth Rate = $500 Access the Rest of the IB Interview Guide 82 of 95 http://breakingintowallstreet.com $12,000 * FCF Growth Rate = $700 FCF Growth Rate = 5.8% This result tells you that the market expects this company’s cash flows to grow at around 5.8% per year into the future. You might then compare that to your views of the company’s growth to see if this company might be overvalued or undervalued. "
    },
    {
       "Type":"EV"
      ,"Question":"Suppose that you graph the EV / EBITDA multiples for a set of similar companies along with the revenue growth rates, EBITDA margins, and EBITDA growth rates. Which operational metric will MOST LIKELY have the strongest correlation with the EV / EBITDA multiples?"
      ,"Answer":"Since a company’s value depends on its cash flow, cash flow growth rate, and Discount Rate, the EV/EBITDA multiples are most likely to be correlated with the EBITDA growth rates. While EBITDA, Cash Flow, and Free Cash Flow are very different metrics, EBITDA growth is still closer to cash flow growth than revenue growth is. EBITDA margins don’t make much of an impact unless they are changing – only changing margins will produce different growth rates. There might be some correlation between revenue growth rates and EV/EBITDA multiples, but the correlation will be stronger for revenue growth and EV / Revenue multiples."
    },
    {
       "Type":"EV"
      ,"Question":"Despite this principle, why do valuation multiples and growth rates often NOT display as much correlation as you might expect?"
      ,"Answer":" First, EBITDA growth and FCF growth are very different since FCF includes taxes, the Change in Working Capital, and the full CapEx amount, whereas EBITDA excludes these. Company valuation is ultimately based on cash flow growth, so growth rates in revenue, EBITDA, EBIT, and Net Income are, at best, rough approximations of cash flow growth. Also, not every comparable company necessarily has the same Discount Rate; perhaps the company you’re analyzing is a lot riskier, or a lot less risky than the others. Access the Rest of the IB Interview Guide 83 of 95 http://breakingintowallstreet.com Finally, non-financial factors could easily affect multiples. For example, if the company reported recent legal troubles, announced the development of a new product, or recruited a key executive, all those changes could affect its stock price and therefore its multiples. "
    },
    {
       "Type":"EV"
      ,"Question":"You’re valuing a mid-sized manufacturing company, and you’re comparing it to peer companies in the same industry. This company’s EV / EBITDA multiple is 15x, and the median EV / EBITDA for the comparable companies is 10x. What’s the MOST likely explanation?"
      ,"Answer":" The most likely explanation is that the market expects the company’s cash flows to grow more quickly than those of other companies. For example, other companies might be expected to grow at 5%, but this company might be expected to grow at 10%. The Discount Rate is unlikely to differ by a huge amount because these companies are all about the same size and are in the same industry, which means the risk should be similar. Non-financial factors could also affect the multiple – for example, recent positive news about strategy, product, executives, intellectual property, or competitive performance might also explain why this company trades at a higher multiple than the others. "
    },
    {
       "Type":"EV"
      ,"Question":"Would you rather buy a company trading at a 15x EV / EBITDA multiple, or one trading at a 10x multiple?"
      ,"Answer":"It’s completely dependent on what peer companies are trading at and how this company compares. If every company in the sector is trading at multiples of 20-25x, then 15x might be cheap; if other companies are trading at multiples of 6-8x, then 10x might be expensive. When you’re buying companies, you always try to find ones that are undervalued so that you can sell the stock for a higher price in the future. "
    },
    {
       "Type":"EV"
      ,"Question":"Could a valuation multiple such as P / E or EV / EBITDA ever be negative? What would it mean?"
      ,"Answer":" Yes, it’s possible for any valuation multiple to be negative (except for ones based on Revenue, which could be $0 but couldn’t be negative). Access the Rest of the IB Interview Guide 84 of 95 http://breakingintowallstreet.com If a company has a negative Net Income or negative EBITDA, the multiples will turn negative. It means that this particular multiple is not meaningful for valuing the company, so you’ll have to use other multiples or methodologies to value it. "
    },
    {
       "Type":"EV"
      ,"Question":"If a company has both Debt and Preferred Stock, why is it NOT valid to use Net Income rather than Net Income to Common when calculating its P / E multiple?"
      ,"Answer":"You can use Equity Value or Enterprise Value in multiples, but you shouldn’t create “halfpregnant” multiples that are based on metrics in between Equity Value and Enterprise Value. Also remember that if you do not include an expense in the denominator of a multiple, you have to include the Balance Sheet item corresponding to that expense in the numerator (and vice versa). So, if you use Net Income rather than Net Income to Common in this case, you’ll have to use a modified version of Equity Value that adds Preferred Stock, but none of the other items that you typically add when calculating Enterprise Value. This numerator will confuse anyone looking at your analysis, so you should stick with the standard Equity Value calculation and pair it with Net Income to Common. "
    },
    {
       "Type":"EV"
      ,"Question":"If a company’s cash flow matters most, why do you use metrics like EBIT and EBITDA in valuation multiples rather than CFO or FCF?"
      ,"Answer":"Mostly for convenience and comparability. CFO and FCF measure a company’s cash flows more accurately, but they also take more time to calculate since you need a full or partial Cash Flow Statement for them. Also, the individual items within CFO and FCF vary a lot between companies, and vastly different figures for Deferred Taxes, Stock-Based Compensation, and the Change in Working Capital make it difficult to create meaningful comparisons. "
    },
    {
       "Type":"EV"
      ,"Question":"What are the advantages and disadvantages of EV / EBITDA vs. EV / EBIT vs. P / E?"
      ,"Answer":"First, you should note that you never look at just one multiple when valuing companies. Valuation is about the big picture, and you want to evaluate the company across a variety of multiples and methodologies. Access the Rest of the IB Interview Guide 85 of 95 http://breakingintowallstreet.com But the interviewer will probably be annoying and press you on this point, so you can say that with EV / EBITDA vs. EV / EBIT, EV / EBITDA is better in cases when you want to completely exclude the company’s CapEx, Depreciation, and capital structure. EV / EBIT is better when you want to exclude capital structure, but partially factor in CapEx and Depreciation. It is common in industries, such as manufacturing, where those items are key value drivers for companies. The P / E multiple is not terribly useful in most cases because it’s affected by different tax rates, capital structures, non-core business activities, and more – so you use it primarily to be “complete” and ensure that you’ve covered all the common multiples. Also, sometimes it is more relevant and important in certain industries, such as commercial banks and insurance firms, where you do want to factor in the interest income and expense. "
    },
    {
       "Type":"EV"
      ,"Question":"What are the advantages and disadvantages of FCF vs. Unlevered FCF vs. Levered FCF?"
      ,"Answer":"The main advantage of Unlevered FCF is that it’s capital structure-neutral, so a company’s cash flow will be the same regardless of its Cash, Debt, and Preferred Stock. It’s also easier and faster to calculate than the others. You’d use FCF or Levered FCF if you want to take into account the company’s capital structure, and you’d use Levered FCF to be slightly more accurate since it includes (Mandatory?) Debt Principal Repayments. You almost always use Unlevered FCF in a DCF analysis to value a company; FCF is more common for standalone financial statement analysis; and Levered FCF is rare, partially because no one agrees on how to calculate it. You can create a DCF analysis based on Levered FCF as well, but we strongly recommend against doing this because it’s less reliable and harder to set up."
    },
    {
       "Type":"EV"
      ,"Question":". When you use EBITDAR in the EV / EBITDAR multiple, how must you adjust Enterprise Value?"
      ,"Answer":" If the denominator of a valuation multiple excludes an expense, then the numerator should include the Balance Sheet item corresponding to that expense (and vice versa). EBITDAR is EBITDA + Rental Expense, so it excludes this annual Rental Expense by adding it back. Access the Rest of the IB Interview Guide 86 of 95 http://breakingintowallstreet.com So, with EBITDAR and EV / EBITDAR, you have to capitalize the company’s operating leases, usually by multiplying the annual lease expense by 7x or 8x, and then add the capitalized leases to Enterprise Value. There is no existing Balance Sheet item since operating leases are off-BS, so you must create a new Balance Sheet item by capitalizing these leases. "
    },
    {
       "Type":"EV"
      ,"Question":"Could Levered FCF ever be higher than Unlevered FCF?"
      ,"Answer":" Yes. Levered FCF includes Net Interest Expense, so if the company had a negative value for that figure, i.e. it earned more in Interest Income than it spent on Interest Expense, and it also had minimal Debt principal repayments, then Levered FCF might be higher than Unlevered FCF. This scenario is highly unusual, but it is possible."
    },
    {
       "Type":"EV"
      ,"Question":". If EBITDA decreases, how do Unlevered and Levered FCF change?"
      ,"Answer":"Think of what EBITDA includes: Only Revenue, COGS, and Operating Expenses. Unlevered FCF and Levered FCF also include all those items, plus more. So, if EBITDA decreases, it means that Revenue has decreased, or that COGS or Operating Expenses have increased. If any of those happens, then both Levered FCF and Unlevered FCF should also decrease since the Operating Income that flows into both of them will also be lower. Technically, the FCF figures might stay the same if the D&A, Working Capital, or CapEx change in such a way that the change offsets the drop in Operating Income. But that’s not the main point of the question; it’s just an edge case. "
    },
    {
       "Type":"EV"
      ,"Question":"What are some different ways you can calculate Unlevered FCF?"
      ,"Answer":" The main methods are: • Method #1: EBIT * (1 – Tax Rate) + Non-Cash Adjustments and Changes in Working Capital from CFS – CapEx. Access the Rest of the IB Interview Guide 87 of 95 http://breakingintowallstreet.com • Method #2: (EBITDA – D&A) * (1 – Tax Rate) + Non-Cash Adjustments and Changes in Working Capital from CFS – CapEx. • Method #3: CFO – (Net Interest Expense and Other Items Between Operating Income and Pre-Tax Income) * (1 – Tax Rate) – CapEx. Note that in Method #3, you’re reversing the interest expense, which is why we used a negative sign for that term. The Interest Expense is a negative on the Income Statement, so if you use a negative sign in front of it, you turn it into a positive. "
    },
    {
       "Type":"EV"
      ,"Question":"When you calculate Unlevered FCF starting with EBIT * (1 – Tax Rate), or NOPAT, you’re not counting the tax shield from the interest expense. Isn’t that incorrect?"
      ,"Answer":" No, it’s correct. If you’re excluding the impact of a company’s capital structure, you have to exclude EVERYTHING related to its capital structure. You can’t say, “Well, let’s exclude interest… but let’s still include the tax benefits from that interest.” The tax savings from the interest expense do not exist if there is no interest expense. If you counted the tax benefits from the interest expense, you’d have to include the entire interest expense as well, which would turn it into Free Cash Flow rather than Unlevered FCF. "
    },
    {
       "Type":"EV"
      ,"Question":"Could a company’s EV / EBITDA multiple ever equal its P / E multiple?"
      ,"Answer":" Yes, it’s possible because Enterprise Value, EBITDA, Equity Value, and Net Income could be almost any values. For example, if Enterprise Value = $100, EBITDA = $10, Equity Value = $50, and Net Income = $5, then EV / EBITDA = 10x and P / E = 10x as well. In practice, P / E multiples tend to be higher than EV / EBITDA multiples because Net Income is usually smaller than EBITDA by a greater percentage than Equity Value is smaller than Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"Two companies have the same P / E multiples but different EV / EBITDA multiples. How can you tell which one has more Debt?"
      ,"Answer":" Access the Rest of the IB Interview Guide 88 of 95 http://breakingintowallstreet.com You might be tempted to say, “The one with the higher EV / EBITDA multiple,” but that’s wrong. You can’t answer this question because the companies could be very different sizes. For example, if they both have P / E multiples of 15x, but one company has Net Income of $10 and one has Net Income of $100, the one with Net Income of $100 is likely to have more Debt – even if its EV / EBITDA multiple is lower. If you assume that both companies have the same Net Income and the same EBITDA, then you can “kind of” answer this question. In that case, the companies have the same Equity Value, so the company with the higher EV / EBITDA multiple must have a higher Enterprise Value. Most likely, that means that it has more Debt. HOWEVER, remember that other items factor into the calculation. Perhaps both companies have the same amount of Debt, but the one with the higher EV / EBITDA multiple has less Cash. Or the company with the higher multiple has a higher Unfunded Pension or Preferred Stock balance. But as originally stated, this question is too vague to answer unless you get more information. "
    },
    {
       "Type":"EV"
      ,"Question":"How do you decide whether to use Equity Value or Enterprise Value when you create valuation multiples?"
      ,"Answer":" You have to look at which group of investors this operational metric is available to: All the investor in the company (Equity, Debt, Preferred, and others), or just common Equity investors? If it’s all the investors, use Enterprise Value; if it’s just equity investors, use Equity Value. One easy rule of thumb is to look at whether the metric includes Net Interest Expense. If it does, it pairs with Equity Value; if it does not, it pairs with Enterprise Value. If you’re creating a valuation multiple based on a non-financial metric, such as Unique Users or Subscribers, you almost always use Enterprise Value since those metrics are available to and benefit all the investors in the company."
    },
    {
       "Type":"EV"
      ,"Question":". Should you use Equity Value or Enterprise Value with Free Cash Flow?"
      ,"Answer":" Access the Rest of the IB Interview Guide 89 of 95 http://breakingintowallstreet.com It depends on the type of Free Cash Flow. If it includes Net Interest Expense, i.e. it is just “Free Cash Flow” or Levered FCF, you use Equity Value. If it does not include the Net Interest Expense, i.e. it is Unlevered FCF, you use Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"Two companies have the same amount of Debt, but one company has Convertible Debt, and the other has traditional Debt. Both companies have the same Operating Income, Tax Rate, and Equity Value. Which company will have a higher P / E multiple?"
      ,"Answer":" Since the interest rates on Convertible Debt are lower than the rates on traditional Debt, the company with Convertible Debt will have a lower interest expense and therefore a higher Net Income. As a result, its P / E multiple will be lower. So, the company with Convertible Debt will have a lower P / E multiple, and the company with traditional Debt will have a higher P / E multiple. Advanced Note: Technically, you may have to reflect on the Income Statement the “Amortization of the Convertible Bond Discount,” which is a number that reflects how the Liability component of a Convertible Bond is worth less than a normal Bond because of the lower interest rate. If you do this, then the Net Incomes of both companies will be much closer, and the P / E multiples may be almost the same. "
    },
    {
       "Type":"EV"
      ,"Question":"A company is currently trading at 10x EV / EBITDA. It wants to sell an Asset for 2x the Asset’s EBITDA. Will that sale increase or decrease the company’s Enterprise Value?"
      ,"Answer":" It depends on what type of Asset it is. Assuming that it is a core-business Asset, then the sale will reduce the company’s Enterprise Value because the company is trading away the Asset for Cash, which is a non-core-business Asset. If it’s not a core-business Asset, then the company’s Enterprise Value won’t change. Even though the company’s Enterprise Value decreases in the first case, its EV / EBITDA multiple increases because the Asset’s multiple was lower than the multiple for the entire company. Pretend that the company’s total EBITDA was $100, and this Asset contributed $20 of that EBITDA. The company’s Enterprise Value before the sale was, therefore, $1,000. Access the Rest of the IB Interview Guide 90 of 95 http://breakingintowallstreet.com The company now sells the Asset for $40. After the sale, the company’s Enterprise Value falls by $40, and its EBITDA falls by $20. So, its new EV / EBITDA is $960 / $80, or 12x. This is why companies often sell under-performing divisions: To boost their valuation multiples and increase their stock prices."
    },
    {
       "Type":"EV"
      ,"Question":"Is it accurate to subtract 100% of the Cash balance when moving from Equity Value to Enterprise Value?"
      ,"Answer":"No, but everyone does it anyway. The reasoning is that a portion of any company’s Cash balance is a “core-business Asset” because the company needs a certain minimum amount of Cash to continue running its business. So technically, you should subtract only the Excess Cash, i.e. the portion of the Cash balance above this number. For example, if the company has $1,000 in Cash but needs only $200 to run its business, you should subtract $800 rather than $1,000 when calculating Enterprise Value. However, companies rarely disclose this number, and it is almost impossible to determine on your own, so in practice, everyone just subtracts the entire Cash balance. "
    },
    {
       "Type":"EV"
      ,"Question":"Why do you NOT subtract Goodwill when moving from Equity Value to Enterprise Value?"
      ,"Answer":" The company doesn't need it to continue operating its business. Goodwill is a core-business Asset, so you should NOT subtract it when moving to Enterprise Value. Remember that Goodwill reflects the premiums paid for companies that the company previously acquired – if you subtracted it, you’d be saying, “Those previous acquisitions are not a part of this company’s core business anymore.” And that’s true only if the company has shut down or sold those companies, in which case it removes all Assets and Liabilities associated with them. "
    },
    {
       "Type":"EV"
      ,"Question":"Why might you subtract only part of a company's Deferred Tax Assets (DTAs) when calculating Enterprise Value?"
      ,"Answer":" Access the Rest of the IB Interview Guide 91 of 95 http://breakingintowallstreet.com Deferred Tax Assets can contain many different items, some of which are related to simple timing differences or tax credits for operational items. But you should subtract ONLY the Net Operating Losses (NOLs) that are in the DTA because those are non-operational in nature. There is some controversy on exactly which figure to subtract since NOLs are off-Balance Sheet Assets with a small presence (roughly, NOLs * Tax Rate) within the DTA. So, some people argue that you should use the off-BS figure, some argue that it should be the on-BS figure, and some argue for other approaches, such as calculating the PV of tax savings from the NOL and subtracting that. Don’t mention all of this in interviews – just acknowledge that you subtract NOLs when moving from Equity Value to Enterprise Value. "
    },
    {
       "Type":"EV"
      ,"Question":"Why might someone argue that you should NOT add capital leases when moving from Equity Value to Enterprise Value?"
      ,"Answer":"Some people argue that capital leases are operational items since owning vs. renting buildings (or planes, stores, etc.) is an operational decision, not a financial one. If capital leases are “operational liabilities” and they do not represent another investor group, you should not add them in this calculation. We disagree with this view because, in our opinion, all leases are financial in nature – they’re similar to Debt since they require fixed payments for many years under non-cancelable contracts. So, we treat capital leases as a Debt-like item, and we recommend capitalizing operating leases, especially in industries where some companies rent and others own property. "
    },
    {
       "Type":"EV"
      ,"Question":"How do you factor in Working Capital when moving from Equity Value to Enterprise Value?"
      ,"Answer":" You don’t. Remember that Equity Value represents the value of ALL the company’s Assets but only to equity investors. So, you subtract items only if they’re non-core-business Assets, and you add Liability and Equity line items only if they represent different investor groups. Access the Rest of the IB Interview Guide 92 of 95 http://breakingintowallstreet.com The Assets that comprise Working Capital all count as core-business Assets (e.g., Inventory, Accounts Receivable, Prepaid Expenses, etc.), and the Liabilities in Working Capital are all operational items that do not represent other investor groups (e.g., Accrued Expenses, Deferred Revenue, etc.). So, there’s no reason to add or subtract Working Capital, as both Equity Value and Enterprise Value reflect it implicitly. "
    },
    {
       "Type":"EV"
      ,"Question":"Why do you subtract Equity Investments, AKA Associate Companies, when moving from Equity Value to Enterprise Value?"
      ,"Answer":"Two reasons. First, they’re non-core-business Assets since the company could operate fine without them. You should, therefore, exclude them from Enterprise Value. Second, you need to do this for comparability purposes. Metrics like EBITDA, EBIT, and Revenue include 0% of these Equity Investments’ financial contributions, but Equity Value implicitly includes the value of the stake. So, if a Parent Company owns 30% of an Associate Company, the Parent Company’s Equity Value will include the value of that 30% stake. However, its Revenue, EBIT, and EBITDA include nothing from it. Therefore, you have to subtract this 30% stake when moving from Equity Value to Enterprise Value to ensure that all Enterprise Value-based valuation multiples exclude Equity Investments in both the numerator and the denominator. "
    },
    {
       "Type":"EV"
      ,"Question":"Why do you add Noncontrolling Interests when moving from Equity Value to Enterprise Value?"
      ,"Answer":" First, these Noncontrolling Interests represent another investor group: Another company that the Parent Company owns a majority stake in. Enterprise Value reflects all the investor groups in a company, so you must add Noncontrolling Interests. Second, you need to do this for comparability purposes. Since the financial statements are consolidated 100% when the Parent Company owns a majority stake in the Other Company, metrics like Revenue, EBIT, and EBITDA include 100% of the Other Company’s financials. Equity Value, however, includes only the value of the actual percentage the Parent owns. Access the Rest of the IB Interview Guide 93 of 95 http://breakingintowallstreet.com So, if a Parent Company owns 70% of the Other Company, the Parent Company’s Equity Value will include the value of that 70% stake. But its Revenue, EBIT, and EBITDA reflect 100% of the Other Company’s Revenue, EBIT, and EBITDA. Therefore, you have to add the 30% the Parent Company does not own – the Noncontrolling Interest – when you move from Equity Value to Enterprise Value, so that Enterprise Value reflects 100% of that Other Company’s value. Doing so ensures that metrics such as EV / Revenue and EV / EBITDA include 100% of the Other Company’s value and financial contributions so that the multiples are consistent. "
    },
    {
       "Type":"EV"
      ,"Question":"If a company has $10,000 in convertible bonds with a par value of $2,000 and a conversion price of $20.00, how many diluted shares will there be?"
      ,"Answer":"There is not enough information to answer the question. You also need to know the current stock price of the company to see if the convertible bonds could convert and create additional shares. "
    },
    {
       "Type":"EV"
      ,"Question":"A company has 100 shares outstanding, and its current share price is $10.00. It also has 10 options outstanding at an exercise price of $5.00 each. What is its Diluted Equity Value?"
      ,"Answer":" Its Basic Equity Value is $1,000, or 100 * $10.00. To calculate the diluted shares, note that the options are all “in-the-money” – their exercise price is less than the current share price. When these options are exercised, 10 new shares get created – so the share count is now 110 rather than 100. The investors paid the company $5.00 to exercise the options, so the company gets $50 in cash. It uses that cash to buy back 5 of the new shares, so the diluted share count is 105, and the Diluted Equity Value is $1,050. "
    },
    {
       "Type":"EV"
      ,"Question":"A company has 100 shares outstanding, and its current share price is $10.00. It also has 10 options outstanding at an exercise price of $15.00. What is its Diluted Equity Value?"
      ,"Answer":" $1,000. The options’ exercise price is above the current share price, so they have no dilutive effect. Access the Rest of the IB Interview Guide 94 of 95 http://breakingintowallstreet.com "
    },
    {
       "Type":"EV"
      ,"Question":"A company has 1 million shares outstanding, and its current share price is $100.00. It also has $10 million of convertible bonds, with a par value of $1,000 and a conversion price of $50.00. What are its diluted shares outstanding?"
      ,"Answer":"First, note that these convertible bonds are convertible because the company’s share price is above the conversion price. So, you count them as additional shares rather than Debt. Next, you divide the value of the convertible bonds – $10 million – by the par value – $1,000 – to figure out how many individual bonds there are: $10 million / $1,000 = 10,000 convertible bonds. Next, the number of shares per bond is the par value divided by the conversion price: $1,000 / $50.00 = 20 shares per bond. So, the convertibles create 20 * 10,000, or 200,000 new shares, and the diluted share count is 1.2 million. You don’t use the Treasury Stock Method with convertibles because the investors don’t pay the company anything to convert the bonds into shares."
    },
    {
       "Type":"EV"
      ,"Question":". A company has 10,000 shares outstanding and a current share price of $20.00. It has 100 options outstanding at an exercise price of $10.00. It also has 50 Restricted Stock Units (RSUs) outstanding. Finally, it also has 100 convertible bonds outstanding at a conversion price of $10.00 and par value of $100. What is its Diluted Equity Value?"
      ,"Answer":" Since the options are in-the-money, you assume that they get exercised, so 100 new shares are created. The company receives 100 * $10.00, or $1,000, in proceeds. Its share price is $20.00, so it can repurchase 50 shares with these proceeds. There are now 50 additional shares outstanding (100 new shares – 50 repurchased). You add the 50 RSUs as if they were common shares, so now there’s a total of 100 additional shares outstanding. Access the Rest of the IB Interview Guide 95 of 95 http://breakingintowallstreet.com The company’s share price of $20.00 exceeds the conversion price of $10.00, so the convertible bonds can convert into shares. Divide the par value by the conversion price to determine the shares per bond: $100 / $10.00 = 10 new shares per bond There are 100 convertible bonds outstanding, so you get 1,000 new shares (100 convertible bonds * 10 new shares per bond). All of these changes create 1,100 additional shares outstanding, so the diluted share count is now 11,100, and the Diluted Equity Value is 11,100 * $20.00, or $222,000. "
    },
    {
       "Type":"EV"
      ,"Question":"This same company also has Cash of $10,000, Debt of $30,000, and Noncontrolling Interests of $15,000. What is its Enterprise Value?"
      ,"Answer":" You subtract the Cash, add the Debt, and then add Noncontrolling Interests: Enterprise Value = $222,000 – $10,000 + $30,000 + $15,000 = $257,000"
    },
    {
       "Type":"M&A"
      ,"Question":"Why would one company want to buy another company?"
      ,"Answer":"One company will want to buy another company if it believes it will be better off after the acquisition takes place. For example: • The Seller’s asking price is less than its Implied Value, i.e. the Present Value of its future cash flows. • The Buyer’s expected IRR from the acquisition exceeds its WACC. Buyers often acquire Sellers to save money via consolidation and economies of scale, to grow geographically or gain market share, to acquire new customers or distribution channels, and to expand their products. Deals are also motivated by competition, office politics, and ego. Access the Rest of the IB Interview Guide 91 of 118 http://breakingintowallstreet.com"
    },
    {
       "Type":"M&A"
      ,"Question":"How can you analyze an M&A deal and determine whether or not it makes sense?"
      ,"Answer":" The qualitative analysis depends on the factors above: Could the deal help the company expand geographies, products, or customer bases, give it more intellectual property, or improve its team? The quantitative analysis might include a valuation of the Seller to see if it’s undervalued, as well as a comparison of the expected IRR to the Buyer’s WACC. Finally, EPS accretion/dilution is very important in most deals because few Buyers want to execute dilutive deals; investors focus tremendously on near-term EPS, so dilutive deals tend to make companies’ stock prices decline. "
    },
    {
       "Type":"M&A"
      ,"Question":"Walk me through a merger model (accretion/dilution analysis)."
      ,"Answer":" In a merger model, you start by projecting the financial statements of the Buyer and Seller. Then, you estimate the Purchase Price and the mix of Cash, Debt, and Stock used to fund the deal. You create a Sources & Uses schedule and Purchase Price Allocation schedule to estimate the true cost of the acquisition and its effects. Then, you combine the Balance Sheets of the Buyer and Seller, reflecting the Cash, Debt, and Stock used, new Goodwill created, and any write-ups. You then combine the Income Statements, reflecting the Foregone Interest on Cash, Interest on Debt, and synergies. If Debt or Cash changes over time, your Interest figures should also change. The Combined Net Income equals the Combined Pre-Tax Income times (1 – Buyer’s Tax Rate), and to get the Combined EPS, you divide that by the Buyer’s Existing Share Count + New Shares Issued in the Deal. You calculate the accretion/dilution by taking the Combined EPS, dividing it by the Buyer’s standalone EPS, and subtracting 1. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why might an M&A deal be accretive or dilutive?"
      ,"Answer":" A deal is accretive if the extra Pre-Tax Income from a Seller exceeds the cost of the acquisition in the form of Foregone Interest on Cash, Interest Paid on New Debt, and New Shares Issued. Access the Rest of the IB Interview Guide 92 of 118 http://breakingintowallstreet.com For example, if the Seller contributes $100 in Pre-Tax Income, but the deal costs the Buyer only $70 in Interest Expense, and it doesn’t issue any new shares, the deal will be accretive because the Buyer’s Earnings per Share (EPS) will increase. A deal will be dilutive if the opposite happens. For example, if the Seller contributes $100 in Pre-Tax Income but the deal costs the Buyer $130 in Interest Expense, and its share count remains the same, its EPS will decrease. "
    },
    {
       "Type":"M&A"
      ,"Question":"How can you tell whether an M&A deal will be accretive or dilutive?"
      ,"Answer":"You compare the Weighted Cost of Acquisition to the Seller’s Yield at its purchase price. • Cost of Cash = Foregone Interest Rate on Cash * (1 – Buyer’s Tax Rate) • Cost of Debt = Interest Rate on New Debt * (1 – Buyer’s Tax Rate) • Cost of Stock = Reciprocal of the Buyer’s P / E multiple, i.e. Net Income / Equity Value. • Seller’s Yield = Reciprocal of the Seller’s P / E multiple, calculated using the Purchase Equity Value. Weighted Cost of Acquisition = % Cash Used * Cost of Cash + % Debt Used * Cost of Debt + % Stock Used * Cost of Stock. If the Weighted Cost is less than the Seller’s Yield, the deal will be accretive, if the Weighted Cost is greater than the Seller’s Yield, the deal will be dilutive. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why do you focus so much on EPS in M&A deals?"
      ,"Answer":" Because it’s the only easy-to-calculate metric that also captures the FULL impact of the deal – the Foregone Interest on Cash, Interest on New Debt, and New Shares Issued. Although metrics such as EBITDA and Unlevered FCF are better in some ways, they don’t reflect the deal’s full impact because they exclude Interest and the effects of new shares. "
    },
    {
       "Type":"M&A"
      ,"Question":"How do you determine the Purchase Price in an M&A deal?"
      ,"Answer":" If the Seller is public, you assume a premium over the Seller’s current share price based on average premiums for similar deals in the market (usually between 10% and 30%). You can then use the DCF, Public Comps, and other valuation methodologies to sanity-check this figure. Access the Rest of the IB Interview Guide 93 of 118 http://breakingintowallstreet.com The Purchase Price for private Sellers is based on the standard valuation methodologies, and you usually link it to a multiple of EBITDA or EBIT since private companies don’t have publicly traded shares. If the Buyer expects significant synergies, it is often willing to pay a higher premium or multiple for the Seller, though the impact isn’t necessarily 1:1. "
    },
    {
       "Type":"M&A"
      ,"Question":"What are the advantages and disadvantages of each purchase method (Cash, Debt, and Stock) in M&A deals?"
      ,"Answer":" Cash tends to be the cheapest option; most companies earn little Interest Income on it, so they don’t lose much by using it to fund deals. It’s also fastest and easiest to close Cash-based deals. The downside is that using Cash limits the Buyer’s flexibility in case it needs the funds for something else in the near future. Debt is normally cheaper than Stock but more expensive than Cash, and deals involving Debt take more time to close because of the need to find investors. Debt also limits the Buyer’s flexibility because additional Debt makes future Debt issuances more difficult and expensive. Finally, Stock tends to be the most expensive option, though it can sometimes be the cheapest, on paper, if the Buyer trades at very high multiples. It dilutes the Buyer’s existing investors, but it also prevents the Buyer from paying any additional cash expense for the deal. In some cases, the Buyer can also issue Stock more quickly than it can issue Debt. "
    },
    {
       "Type":"M&A"
      ,"Question":"How does an Acquirer determine the mix of Cash, Debt, and Stock to use in a deal?"
      ,"Answer":" Since Cash is cheapest for most Acquirers, they’ll use all the Cash they can before moving to the other funding sources. So you might assume that the Cash Available equals the Acquirer’s current Cash balance minus its Minimum Cash balance. After that, Debt tends to be the next cheapest option. An Acquirer might be able to raise Debt up to the level where its Debt / EBITDA and EBITDA / Interest ratios stay in-line with those of peer companies. Access the Rest of the IB Interview Guide 94 of 118 http://breakingintowallstreet.com So if it’s levered at 2x EBITDA now and similar companies have up to 4-5x Debt / EBITDA, it might be able to raise Debt up to that level. Finally, there’s no strict limit on the Stock an Acquirer might issue, but very few companies would issue enough to give up control of the company, and some Acquirers will issue Stock only up to the point at which the deal turns dilutive. "
    },
    {
       "Type":"M&A"
      ,"Question":"Which purchase method does a Seller prefer in an M&A deal?"
      ,"Answer":"The Seller has to balance taxes with the certainty of payment and potential future upside. To a Seller, Debt and Cash are similar because they mean immediate payment, but also immediate capital gains taxes and no potential upside if the Buyer’s share price increases. But there’s also no risk if the Buyer’s share price decreases. Stock is more of a gamble because the Seller could end up with a higher price if the Buyer’s share price increases, but it could also get a lower price the share price drops. The Seller also avoids immediate taxes with Stock since it pays taxes only when the shares are sold. So the preferred method depends on the Seller’s confidence in the Buyer: Cash and Debt are better when there’s uncertainty, while Stock may be better with large, stable Buyers. "
    },
    {
       "Type":"M&A"
      ,"Question":"What’s the impact of each purchase method in an M&A deal, and how do you estimate the Cost of each method?"
      ,"Answer":" The Cost of Cash is represented by the Foregone Interest on Cash: The Acquirer loses future projected Interest Income by using Cash to fund a deal. The Cost of Debt is represented by the Interest Expense on New Debt. For both of these, you take the interest rate and multiply by (1 – Acquirer’s Tax Rate) to estimate the after-tax costs. The Cost of Stock is represented by the additional shares that get created in a deal and how those shares reduce the Combined Company’s EPS. It’s equal to the reciprocal of the Buyer’s P / E Multiple, i.e. 1 / (Buyer’s P / E multiple)."
    },
    {
       "Type":"M&A"
      ,"Question":". Isn’t the Foregone Interest on Cash just an “opportunity cost”?"
      ,"Answer":" Why do you include it? Access the Rest of the IB Interview Guide 95 of 118 http://breakingintowallstreet.com No, it’s not just an “opportunity cost” because the Acquirer’s projected Pre-Tax Income already includes the Interest Income that the company expects to earn on its Cash balance. So if an Acquirer expects $90 in Operating Income and $10 in Interest Income for a total of $100 in Pre-Tax Income, its projected Pre-Tax Income will fall if it uses Cash to fund the deal. "
    },
    {
       "Type":"M&A"
      ,"Question":"Isn’t it a contradiction to calculate the Cost of Stock by using the reciprocal of the Acquirer’s P / E multiple?"
      ,"Answer":"What about the Risk-Free Rate, Beta, and the Equity Risk Premium? It’s not a contradiction; it’s just a different way of measuring the Cost of Equity. The “Reciprocal of the P / E Multiple” method measures Cost of Equity in terms of EPS impact, whereas the CAPM method measures it based on the stock’s expected annual returns. Neither method is “the correct one”: You just use them in different contexts. In most cases, regardless of the method you use, Equity will be the most expensive funding source for a company. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why might an Acquirer choose to use Stock or Debt even if it could pay for the Seller in Cash?"
      ,"Answer":" The Acquirer might not necessarily be able to draw on its entire Cash balance if, for example, much of the Cash is in overseas subsidiaries or otherwise locked up. Also, the Buyer might be preserving its Cash for a future expansion plan or Debt maturity. Finally, if the Acquirer is trading at very high multiples – e.g., a 100x P / E multiple – then it might be cheaper to use Stock to fund the deal. "
    },
    {
       "Type":"M&A"
      ,"Question":"Are there cases where EPS accretion/dilution is NOT important?"
      ,"Answer":"What else could you look at? Yes, there are many cases where EPS accretion/dilution doesn't matter. For example, if the Buyer is private or it has negative EPS, it won't care about whether the deal is accretive or dilutive. It also makes little difference if the Buyer is far bigger than the Seller (e.g., 10x – 100x its size). Access the Rest of the IB Interview Guide 96 of 118 http://breakingintowallstreet.com Besides EPS accretion/dilution, you can also analyze the qualitative merits of the deal, compare the IRR to the Discount Rate, and value the Buyer before and after the deal. Finally, you can create a Contribution Analysis where you look at how much the Buyer and Seller \"contribute\" to each financial metric and then base the ownership of the Combined Company (and, therefore, the purchase price) on that. "
    },
    {
       "Type":"M&A"
      ,"Question":"How does a Merger differ from an Acquisition?"
      ,"Answer":" There’s no mechanical difference in a merger model or the other analyses because there’s always a Buyer and Seller in any M&A deal. The difference is that in a Merger, the companies will be closer in size, while Buyer is significantly larger than the Seller in an acquisition. 100% Stock or majority-Stock deals are also more common in Mergers because similarly sized companies can rarely use Cash or Debt to acquire each other. You’ll also place more weight on methods such as the Contribution Analysis because 100% Stock deals are so common. "
    },
    {
       "Type":"M&A"
      ,"Question":"What are the main PROBLEMS with merger models?"
      ,"Answer":" First, EPS is not always a meaningful metric. Second, Net Income and cash flow are very different, so EPS-accretive deals might be horrible from a cash-flow perspective. Third, merger models don’t capture the risk inherent in M&A deals. 100% Cash deals almost always look accretive, even though the integration process might go wrong, legal issues might arise, and customers or shareholders might revolt. Finally, merger models don’t capture the qualitative factors of a deal such as cultural fit or management’s ability to work together. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why do most M&A deals fail?"
      ,"Answer":" Most deals fail because of the human element – there might be a cultural mismatch, the Buyer might not have uncovered something important in due diligence, or the Buyer might have had stupid reasons for doing the deal in the first place. Access the Rest of the IB Interview Guide 97 of 118 http://breakingintowallstreet.com Also, the Buyer or Seller might underperform financially, which could turn an apparently attractive deal into a money-losing one."
    },
    {
       "Type":"M&A"
      ,"Question":"Company A, with a P / E of 25x, acquires Company B for a purchase P / E multiple of 15x. Will the deal be accretive?"
      ,"Answer":" You can’t tell unless you know that it’s a 100% Stock deal. If it is a 100% Stock deal, then it will be accretive because the Buyer’s P / E is higher than the Seller’s, indicating that the Buyer’s Cost of Acquisition (1 / 25, or 4%) is less than the Seller’s Yield (1 / 15, or 6.7%)."
    },
    {
       "Type":"M&A"
      ,"Question":". Walk me through the full math for the deal now. Assume that Company A has 10 shares outstanding at a share price of $25.00, and its Net Income is $10. It acquires Company B for a Purchase Equity Value of $150. Company B has a Net Income of $10 as well. Assume the same tax rates for both companies. How accretive is this deal?"
      ,"Answer":" Company A’s EPS is $10 / 10 = $1.00. To do the deal, Company A must issue 6 new shares since $150 / $25.00 = 6, so the Combined Share Count is 10 + 6 = 16. Since no Cash or Debt were used and the tax rates are the same, the Combined Net Income = Company A Net Income + Company B Net Income = $10 + $10 = $20. The Combined EPS, therefore, is $20 / 16 = $1.25, so there’s 25% accretion. Access the Rest of the IB Interview Guide 98 of 118 http://breakingintowallstreet.com "
    },
    {
       "Type":"M&A"
      ,"Question":"Company A now uses Debt with an Interest Rate of 10% to acquire Company B. Is the deal still accretive? At what interest rate does it change from accretive to dilutive?"
      ,"Answer":"  The Weighted Cost of Acquisition would be 10% * (1 – 40%), or 6%, so the deal would still be accretive because that Cost is less than the Seller’s Yield of 6.7%. For the deal to turn dilutive, the After-Tax Cost of Debt would have to exceed 6.7%. Since 6.7% / (1 – 40%) = 11.1%, the deal would turn dilutive at an interest rate above 11.1%. "
    },
    {
       "Type":"M&A"
      ,"Question":"What are the Combined Equity Value and Enterprise Value in this deal?"
      ,"Answer":" Assume the original 100% Stock structure, and that Equity Value = Enterprise Value for both the Buyer and Seller. Combined Equity Value = Buyer’s Equity Value + Value of Stock Issued in the Deal = $250 + $150 = $400. Combined Enterprise Value = Buyer’s Enterprise Value + Purchase Enterprise Value of Seller = $250 + $150 = $400. "
    },
    {
       "Type":"M&A"
      ,"Question":"How do the Combined EV / EBITDA and P / E multiples change if the purchase method changes?"
      ,"Answer":" The Combined EV / EBITDA stays the same regardless of the purchase method, but the Combined P / E multiple will change based on the Stock issued and the Cash and Debt used since those affect the Combined Net Income. "
    },
    {
       "Type":"M&A"
      ,"Question":"Without doing any math, what range would you expect for the Combined P / E multiple?"
      ,"Answer":" The Combined P / E multiple should be in between the Buyer’s P / E multiple and the Seller’s Purchase P / E multiple, so between 25x and 15x here. If Company A is much larger than Company B, the Combined P / E multiple will be closer to the 25x of Company A. But if they’re closer in size, the Combined P / E multiple will be in the middle of this range. You cannot average the P / E multiples of both companies because they may be different sizes; a weighted average also won’t work because the purchase method affects the combined multiple. Access the Rest of the IB Interview Guide 99 of 118 http://breakingintowallstreet.com "
    },
    {
       "Type":"M&A"
      ,"Question":"Now assume that Company A is twice as big financially, so its Equity Value is $500 and its Net Income is $20. Will a 100% Stock deal be more or less accretive?"
      ,"Answer":"  The deal will be less accretive. The intuition is that the company that is not making the deal dilutive – the Buyer – now has a higher weighting in all the calculations. Since Company A’s P / E is the same, but Company A is significantly bigger, its lower Yield “drags down” the Combined EPS for the entire company. The Combined P / E multiple will still be between 15x and 25x, but it will be closer to 25x because Company A is weighted more heavily. "
    },
    {
       "Type":"M&A"
      ,"Question":"Now do the math. What is the accretion/dilution in a 100% Stock deal?"
      ,"Answer":" The Buyer previously represented $250 / $400, or 63%, of the total company, but now it represents $500 / $650, or 77%, of the total company, so we’d expect the accretion to fall by around 10-15%. Company A’s share price is now $50.00, it still has 10 shares outstanding, and its Equity Value is $500. Its EPS is $20 / 10 = $2.00. To acquire Company B, Company A must issue 3 additional shares since $150 / $50.00 = 3. Since both companies have the same tax rate and no Cash or Debt was used, you can add together the Net Income figures: Combined Net Income = $20 + $10 = $30. The new share count is 10 + 3 = 13, and $30 / 13 = $2.31. This is about 15% higher than the Buyer’s standalone EPS ($0.15 is 15% of $1.00, and $0.30 is 15% of $2.00). So it’s about 10% lower than the 25% accretion when Company A was smaller."
    },
    {
       "Type":"M&A"
      ,"Question":". Company A has a P / E of 10x, a Debt Interest Rate of 10%, a Cash Interest Rate of 5%, and a tax rate of 40%. It wants to acquire Company B at a purchase P / E multiple of 16x using 1/3 Stock, 1/3 Debt, and 1/3 Cash. Will the deal be accretive?"
      ,"Answer":"  Company A’s After-Tax Cost of Stock is 1/10, or 10%, its After-Tax Cost of Debt is 10% * (1 – 40%) = 6%, and its After-Tax Cost of Cash is 5% * (1 – 40%) = 3%. Access the Rest of the IB Interview Guide 100 of 118 http://breakingintowallstreet.com Company B’s Yield is 1 / 16, or 6.25%. The Weighted Cost of Acquisition is 10% * 1/3 + 6% * 1/3 + 3% * 1/3 = 3.33% + 2% + 1% = 6.33%. Since the Weighted Cost is slightly above Company B’s Yield, the deal will be dilutive. "
    },
    {
       "Type":"M&A"
      ,"Question":". Company A buys Company B using 100% Debt. Company B has a purchase P / E multiple of 10x and Company A has a P / E multiple of 15x. What Debt interest rate is required to make the deal dilutive?"
      ,"Answer":"  Company B’s Yield is 1 / 10, or 10%, so the After-Tax Cost of Debt must be above that for the deal to be dilutive. Assuming the company has a tax rate of 40%, 10% / (1 – 40%) = 16.667%, which you can round to “Nearly 17%.” That is an exceptionally high interest rate, so a 100% Debt deal would almost certainly be accretive. "
    },
    {
       "Type":"M&A"
      ,"Question":". Company A has an Equity Value of $1,000 and Net Income of $100. Company B has a Purchase Equity Value of $2,000 and Net Income of $50. For a 100% Stock deal to be accretive, how much in synergies must be realized?"
      ,"Answer":"  Company A’s P / E is $1,000 / $100 = 10x, so its Cost of Stock is 10%. Company B’s P / E is $2,000 / $50 = 40x, so its Yield is 1 / 40, or 2.5%. Without synergies, this deal would be highly dilutive. For the deal to turn accretive, Company B’s Yield must exceed 10%. That means that its Purchase P / E multiple must be below 10x, which means its Net Income must be above $200 rather than $50. So there must be $150 in after-tax synergies for this deal to be accretive. At a 40% tax rate, there must be $250 in pre-tax synergies. Access the Rest of the IB Interview Guide 101 of 118 http://breakingintowallstreet.com "
    },
    {
       "Type":"M&A"
      ,"Question":". An Acquirer has an Equity Value of $1 billion, Cash of $50 million, EBITDA of $100 million, Net Income of $50 million, and a Debt / EBITDA ratio of 2x. Peer companies have a median Debt / EBITDA ratio of 4x. It wants to acquire another company for a Purchase Equity Value of $500 million. The Seller has a Net Income of $30 million, EBITDA of $50 million, and no Debt. What’s the best way to fund this deal?"
      ,"Answer":"  The Acquirer would prefer to use its Cash balance to do this deal, but $50 million is likely close to the minimum balance for a company of this size. So this company is unlikely to use Cash. The Acquirer’s P / E multiple is 20x, so its Cost of Stock is 1 / 20, or 5%. That’s a fairly low Cost of Stock, so there’s a chance that the company’s After-Tax Cost of Debt might be higher (e.g., if the Interest Rate on Debt were above 8.33%). However, there’s no information on the Cost of Debt, so our best guess is that Debt is still cheaper than Stock. The company could afford to boost its Debt / EBITDA from 2x to 4x since peer companies have leverage in that range. The Combined Company has $150 million in EBITDA, and 4 * $150 million = $600 million. The Acquirer has $200 million in Debt before the deal takes place, so it could afford to issue $400 million in additional Debt. The remaining $100 million would be issued in Stock. If this company could use part of its Cash balance as well, the $100 million Stock portion would be reduced. "
    },
    {
       "Type":"M&A"
      ,"Question":". An Acquirer has an Equity Value of $500 million, Cash of $100 million, EBITDA of $50 million, Net Income of $25 million, and a Debt / EBITDA ratio of 3x. Similar companies in the market have Debt / EBITDA ratios of 5x. What’s the BIGGEST acquisition this company might be able to complete?"
      ,"Answer":" You can’t answer this question precisely without knowing the Target’s Net Income and EBITDA, but you can make a rough estimate. The Acquirer couldn’t use its entire Cash balance to fund a deal, but it might be able to use a substantial portion of it, such as $50 million or $80 million. Access the Rest of the IB Interview Guide 102 of 118 http://breakingintowallstreet.com It could afford to use leverage up to 5x EBITDA, which means that it could use $100 million in additional Debt to fund a deal. That number might change based on the Seller’s Debt and EBITDA as well. There’s no limit on how much Stock the company could issue, but it would be unlikely to give up control just to make an acquisition, so $500 million in Stock is likely the maximum. In reality, it probably wouldn’t issue anything close to that amount of Stock. A more realistic level might be about half its Current Equity Value ($250 million), or whatever amount turns the deal dilutive. So the best answer is: “In theory, the Acquirer might be able to fund a deal for up to $650 to $700 million. But in reality, unless it wants to issue a massive amount of Stock, the maximum level would be closer to $400 to $650 million.”"
    },
    {
       "Type":"M&A"
      ,"Question":"An Acquirer with an Equity Value of $500 million and Enterprise Value of $600 million buys another company for a Purchase Equity Value of $100 million and Purchase Enterprise Value of $150 million. What are the Combined Equity Value and Enterprise Value?"
      ,"Answer":" The Combined Enterprise Value equals the Enterprise Value of the Buyer plus the Purchase Enterprise Value of the Seller, so it’s $600 million + $150 million = $750 million. You can’t determine the Combined Equity Value because it depends on the purchase method: Combined Equity Value = Acquirer’s Equity Value + Value of Stock Issued in Deal. If it’s a 100% Stock deal, the Combined Equity Value will be $500 million + $100 million = $600 million, but if it’s 100% Cash or Debt, the Combined Equity Value = $500 million. Access the Rest of the IB Interview Guide 103 of 118 http://breakingintowallstreet.com And if the % Stock Used is above 0% but less than 100%, the Combined Equity Value will be between $500 and $600 million. "
    },
    {
       "Type":"M&A"
      ,"Question":"How do the Combined Equity Value and Enterprise Value relate to the purchase method?"
      ,"Answer":" The Combined Enterprise Value is not affected by the purchase method: Regardless of the % Cash, Debt, and Stock used, it’s always equal to the Buyer’s Enterprise Value plus the Purchase Enterprise Value of the Seller. The Combined Equity Value is equal to the Buyer’s Equity Value plus the Value of Stock Issued in the Deal, which could range from $0 up to the Purchase Equity Value of Seller. So if it’s a 100% Stock deal, the Combined Equity Value = Buyer’s Equity Value + Purchase Equity Value of Seller. "
    },
    {
       "Type":"M&A"
      ,"Question":"So you’re saying that in a 100% Cash or Debt deal, the Seller’s Equity Value just “disappears”? How is that possible?"
      ,"Answer":" The Seller’s Equity Value doesn’t “disappear” – it’s just transformed into the Cash or Debt used by the Acquirer in the deal. The Combined Enterprise Value calculation demonstrates this point: Both companies’ Enterprise Values still exist after the deal, so no value is “lost” along the way. "
    },
    {
       "Type":"M&A"
      ,"Question":"Let’s say this same Acquirer (Equity Value of $500 million and Enterprise Value of $600 million) has Net Income of $50 million and EBITDA of $100 million. The Target (Purchase Equity Value of $100 million and Purchase Enterprise Value of $150 million) has Net Income of $10 million and EBITDA of $15 million. What are the Combined P / E and EV / EBITDA multiples in a 100% Stock deal?"
      ,"Answer":" Assume the same tax rates for the Acquirer and Target. The Combined Equity Value in a 100% Stock deal is $500 million + $100 million = $600 million, and the Combined Enterprise Value is $600 million + $150 million = $750 million. The Combined EBITDA is $115 million, and the Combined Net Income, assuming the same tax rates, is $50 million + $10 million = $60 million. Access the Rest of the IB Interview Guide 104 of 118 http://breakingintowallstreet.com Therefore, the Combined P / E multiple is $600 million / $60 million = 10x, and the Combined EV / EBITDA multiple is $750 million / $115 million = ~6.5x. "
    },
    {
       "Type":"M&A"
      ,"Question":"How would those Combined Multiples change in a 100% Cash or Debt deal?"
      ,"Answer":"The Combined EV / EBITDA multiple would stay the same because neither the Combined Enterprise Value nor the Combined EBITDA is affected by the purchase method. The Combined P / E multiple would change because the Combined Equity Value would be lower, at $500 million, in a 100% Cash or Debt deal. The Combined Net Income would also change because of the Foregone Interest on Cash and Interest on Debt. In most cases, the Combined P / E multiple will be lower in a 100% Cash deal because the Combined Equity Value will decline by a greater percentage than the Combined Net Income. It will also tend to be lower in a 100% Debt deal, but you’d have to run the numbers to see for sure – if the Interest Rate on Debt is relatively high and the Seller’s P / E multiple is low, the Combined P / E multiple might increase. "
    },
    {
       "Type":"M&A"
      ,"Question":"How do the Combined Multiples change based on the purchase method?"
      ,"Answer":" Enterprise Value-based multiples do not change based on the % Cash, Debt, and Stock used because the Combined Enterprise Value is not affected by the purchase method, and EV-based metrics such as Revenue, EBITDA, and EBIT are also not affected by it. Equity Value-based multiples will change based on the purchase method because the Combined Equity Value depends on the % Stock Used, and Equity Value-based metrics such as Net Income and Free Cash Flow are impacted by the Foregone Interest and Interest on New Debt. "
    },
    {
       "Type":"M&A"
      ,"Question":"What are the possible ranges for the Combined Multiples after a deal takes place?"
      ,"Answer":" The Combined Multiples should always be between the Buyer’s multiples and the Seller’s purchase multiples. However, you can’t just average the multiples to determine the Combined Multiples because the companies could be different sizes. Access the Rest of the IB Interview Guide 105 of 118 http://breakingintowallstreet.com And it’s not as simple as using the weighted average because the proportion of Enterprise Value and EBITDA from each company might be different. The Combined Multiples will be closer to the Buyer’s multiples if the Buyer is much bigger, but they’ll be in the middle of the range if the Buyer and Seller are closer in size."
    },
    {
       "Type":"M&A"
      ,"Question":"Consider this M&A scenario: • Company A: Enterprise Value of $100, Equity Value of $80, EBITDA of $10, Net Income of $4, and Tax Rate of 50%. • Company B: Enterprise Value of $40, Equity Value of $40, EBITDA of $8, Net Income of $2, and Tax Rate of 50%. Calculate the EV / EBITDA and P / E multiples for each company."
      ,"Answer":" Company A EV / EBITDA = $100 / $10 = 10x; P / E = $80 / $4 = 20x. Company B EV / EBITDA = $40 / $8 = 5x; P / E = $40 / $2 = 20x. "
    },
    {
       "Type":"M&A"
      ,"Question":"Company A acquires Company B using 100% Cash and pays no premium to do so. Assume a 5% Foregone Interest Rate on Cash. What are the Combined EBITDA and P / E multiples?"
      ,"Answer":" Combined EV / EBITDA = Combined Enterprise Value / Combined EBITDA = $140 / $18 = ~7.8x. Combined P / E = Combined Equity Value / Combined Net Income. The Combined Equity Value is just the Acquirer’s Equity Value of $80 since no Stock was used. We can add together both companies’ Net Incomes since they have the same tax rate, so the Combined Net Income is $6. But we have to adjust for the Foregone Interest on Cash as well. The Acquirer used $40 in Cash, and 5% * $40 = $2. After the 50% tax rate, that’s a $1 loss. So the Combined Net Income is $5, which makes the Combined P / E = $80 / $5 = 16x. 10. Now let’s say that Company A instead uses 100% Debt with a 10% interest rate to acquire Company B. Access the Rest of the IB Interview Guide 106 of 118 http://breakingintowallstreet.com Again, Company A pays no premium for Company B. What are the combined multiples? The Combined EV / EBITDA multiple remains the same at ~7.8x because it is not affected by the purchase method. The Combined Equity Value is still just the Acquirer’s Equity Value of $80. The Combined Net Income before adjustments is $6, but now we must adjust for the Interest on Debt. If Company A uses $40 of Debt to acquire Company B, it will pay $40 * 10% * (1 – 50%), or $2, in After-Tax Interest. So the Combined Net Income is $4, which makes the Combined P / E = $80 / $4 = 20x."
    },
    {
       "Type":"M&A"
      ,"Question":"Why is the Purchase Price in an M&A deal NOT equal to the Seller’s Purchase Equity Value or Purchase Enterprise Value exactly?"
      ,"Answer":" The real price depends on the treatment of the Seller’s Cash and Debt in the deal. If the Buyer repays the Seller’s entire Debt balance with transaction funding and uses the Seller’s entire Cash balance to fund the deal, the real price will be close to the Purchase Enterprise Value, but that hardly ever happens. In most cases, the Buyer will “replace” the Seller’s existing Debt with new Debt, which doesn’t affect the cash price. And the Buyer hardly ever uses the Seller’s entire Cash balance to fund the deal – at most, it might use a portion of it. So the real price the Buyer pays is usually between the Purchase Equity Value and Purchase Enterprise Value of the Seller. Access the Rest of the IB Interview Guide 107 of 118 http://breakingintowallstreet.com Many other issues, such as the transaction fees and the treatment of Preferred Stock, Capital Leases, and Unfunded Pensions, also explain this difference. "
    },
    {
       "Type":"M&A"
      ,"Question":"What information do you need from the Buyer and Seller to create a full merger model?"
      ,"Answer":" At the minimum, you need Income Statement projections for both companies over the next 1-2 years. But ideally, you will also create cash-flow projections that show how both companies’ Cash and Debt balances change over time. You do not need full 3-statement projections for both companies – similar to a DCF analysis, cash flow estimates without full Balance Sheet projections are fine. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why is a Sources & Uses schedule important in a full merger model?"
      ,"Answer":" The Sources & Uses schedule is important because it tells you how much the Buyer really pays for the Seller. The Purchase Equity Value and Purchase Enterprise Value can be deceptive for the reasons outlined above. But with the S&U schedule, you add up the total cost of acquiring the company – its shares, any refinanced Debt, and any transaction fees – and then show the amount of Cash, Debt, and Stock that will be used to pay for it. The S&U schedule is also helpful for reflecting more unusual scenarios, such as a Seller using some of its Cash in the deal or a Buyer repaying its own Debt. "
    },
    {
       "Type":"M&A"
      ,"Question":"What’s the purpose of a Purchase Price Allocation schedule in a merger model?"
      ,"Answer":" The main purpose is to estimate the Goodwill that will be created in a deal. Goodwill exists because Buyers often pay far more for companies than their Balance Sheets suggest they are worth; in other words, the Purchase Equity Value exceeds the acquired company’s Common Shareholders’ Equity (CSE). When this happens, the Combined Balance Sheet will go out of balance because the Seller’s CSE is written down, but the total amount of Cash, Debt, and Stock used in the deal exceeds the CSE that was written down. Access the Rest of the IB Interview Guide 108 of 118 http://breakingintowallstreet.com So you estimate the new Goodwill with this schedule, factor in write-ups of Assets such as PP&E and Intangibles, and also include other acquisition effects such as the creation of Deferred Tax Liabilities and changes to existing Deferred Tax items. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why do Deferred Tax Liabilities get created in many M&A deals?"
      ,"Answer":" A Deferred Tax Liability, or DTL, represents the expectation that cash taxes will exceed book taxes in the future. It gets created because Depreciation & Amortization on Asset Write-Ups is not deductible for cash-tax purposes in a Stock Purchase (i.e., an M&A deal structured such that the Buyer purchases all the Seller’s shares and acquires everything it has). As a result, the Buyer will pay more in cash taxes than book taxes until the Write-Ups are fully depreciated. Each time the Buyer pays more in cash taxes than book taxes, the DTL decreases until it eventually reaches 0. "
    },
    {
       "Type":"M&A"
      ,"Question":"An Acquirer purchases a company for a $1 billion Equity Purchase Price, and this Target has $600 million in Common Shareholders’ Equity and no Goodwill. The Acquirer plans to write up the Target’s PP&E and Other Intangible Assets by $100 million. Walk me through the Purchase Price Allocation process, assuming a 40% tax rate."
      ,"Answer":" The “Allocable Purchase Premium” equals the Equity Purchase Price minus the Common Shareholders’ Equity, so $1 billion – $600 million = $400 million. The PP&E and Other Intangible Assets increase by $100 million, so you subtract this figure because it means you won’t need as much Goodwill. So the Purchase Premium is down to $300 million. Then, you must create a Deferred Tax Liability that corresponds to these write-ups. It’s equal to $100 million * 40%, or $40 million, and you add it because an increase in the Liabilities side means that more Goodwill will be needed. So $340 million of Goodwill gets created, along with Asset write-ups of $100 million and a new Deferred Tax Liability of $40 million. Access the Rest of the IB Interview Guide 109 of 118 http://breakingintowallstreet.com "
    },
    {
       "Type":"M&A"
      ,"Question":"What happens if the Acquirer purchases another company for a $1 billion Equity Purchase Price, but the Target’s Common Shareholders’ Equity is $1.5 billion?"
      ,"Answer":" Assume there are no write-ups or other adjustments. “Negative Goodwill” cannot exist per the rules of IFRS and U.S. GAAP. So in this situation, you record this $500 million difference as a Gain on the Income Statement. The Balance Sheet combination still works the same way, but you don’t record any Goodwill; you just add all the acquired Assets and Liabilities. The Balance Sheet still balances because Net Income increases as a result of this Gain. But this Gain is non-cash, so the company’s Cash balance declines and Shareholders’ Equity on the L&E side increases. "
    },
    {
       "Type":"M&A"
      ,"Question":"I don’t believe you. Walk me through what happens if an Acquirer purchases a Target for an Equity Purchase Price $80, in 100% Cash, and the Target has $200 in Assets, $100 in Liabilities, and $100 in Common Shareholders’ Equity."
      ,"Answer":"You write down the Seller’s CSE completely, add the $200 in Assets and $100 in Liabilities to the Acquirer’s Balance Sheet, and then reduce the Cash balance by $80. So far, the Assets side is up by $120 but the Liabilities side is up by only $100, so the Balance Sheet is out of balance. But then you record a Gain of $20 on the Income Statement to reflect this “bargain purchase,” which boosts Pre-Tax Income by $20 and Net Income by $12 at a 40% tax rate. On the CFS, Net Income is up by $12, but you subtract the $20 Gain because it was non-cash, so Cash at the bottom is down by $8 (the intuition is that the company pays taxes on something it didn’t receive in cash). On the BS, Cash is down by $8 on the Assets side, so the Assets side is now up by $112, and on the L&E side, Shareholders’ Equity is up by $12 because of the increased Net Income, so both sides are now up by $112 and balance. "
    },
    {
       "Type":"M&A"
      ,"Question":"What are the main adjustments you make when combining the Balance Sheets in an M&A deal?"
      ,"Answer":" Access the Rest of the IB Interview Guide 110 of 118 http://breakingintowallstreet.com You reflect the Cash, Debt, and Stock used in the deal, create new Goodwill, write up Assets such as PP&E and Other Intangibles, and reflect refinanced Debt. You also show new Deferred Tax Liabilities and the write-offs of existing DTLs and DTAs. You must also write down the Seller’s Common Shareholders’ Equity and reflect transaction and financing fees (transaction fees affect Equity and financing fees are deducted from the new Debt balance). There are many other adjustments; for example, you might reduce Accounts Receivable or Accounts Payable to reflect intercompany receivables or payables, and you might write down the Deferred Revenue balance after the transaction closes because accounting rules state that companies can recognize only the profit portion of Deferred Revenue after a deal. "
    },
    {
       "Type":"M&A"
      ,"Question":"Give me an example of how you might estimate revenue and expense synergies in an M&A deal."
      ,"Answer":" With revenue synergies, you might assume that the Seller can sell its products to some of the Buyer’s customer base. So if the Buyer has 100,000 customers, 1,000 of them might buy widgets from the Seller. Each widget costs $10.00, so that is $10,000 in extra revenue. There will also be COGS and possibly Operating Expenses associated with these extra sales, so you must factor those in as well. For example, if the cost of each widget is $5.00, then the Combined Company will earn only $5,000 in extra Pre-Tax Income. With expense synergies, you might assume that the Combined Company can close a certain number of offices or lay off redundant employees, particularly in functions such as IT, accounting, and administrative support. So if both companies, combined, have 10 offices, and management feels that only 8 offices will be needed after the merger, the combined rental expense will decline. If each office costs $100,000 per year to rent, there will be 2 * $100,000 = $200,000 in expense synergies, which will boost the Combined Pre-Tax Income by $200,000. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why do many merger models tend to overstate the impact of synergies?"
      ,"Answer":" First, many merger models do not include the costs associated with revenue synergies. Even if the Buyer or Seller can sell more products or services after the deal takes place, those extra sales cost something. So you must also include the extra COGS and OpEx. Access the Rest of the IB Interview Guide 111 of 118 http://breakingintowallstreet.com Second, realizing synergies takes time. Even if a company expects $10 million in “long-term synergies,” it won’t realize all of them in Year 1; it might take years, and the percentage realized will increase gradually each year. Finally, realizing synergies costs money. There will always be “integration costs” associated with a deal, and certain types of synergies, such as building consolidation and headcount reduction, will cost even more due to severance costs."
    },
    {
       "Type":"M&A"
      ,"Question":". Why do many merger models misstate the Foregone Interest on Cash and Interest on Debt?"
      ,"Answer":" Many merger models do not track the Combined Company’s Cash and Debt balances over time. If the model shows only 1-2 years, the numbers won’t necessarily be too far off, but if you’re building 5-year projections, you should project the combined cash flows as well. If you don’t track the changing Cash and Debt balances, Interest Income will be understated since the Cash balance tends to grow over time, while the Foregone Interest on Debt will be overstated since the Combined Company can repay Debt with its cash flow. "
    },
    {
       "Type":"M&A"
      ,"Question":"How do you calculate the Combined Company’s Debt repayment capacity in a merger model?"
      ,"Answer":" You do this by creating a “mini” Cash Flow Statement for the combined company. You eliminate most of the Financing and Investing sections (except for CapEx and sometimes Dividends), but you keep much, but not all, of the CFO section. It’s similar to what you do in a DCF to project Unlevered Free Cash Flow, but you’re estimating the company’s Free Cash Flow – which includes Net Interest Expense – here. You have to include the Net Interest Expense because it directly impacts a company’s ability to repay Debt and to generate Cash; the purpose is different from that of a DCF since you’re not valuing a company but instead tracking its Cash and Debt balances. "
    },
    {
       "Type":"M&A"
      ,"Question":"How should you treat Stock-Based Compensation in a merger model?"
      ,"Answer":" The easiest approach is to ignore it and count it as a real cash expense. Just as in a DCF, SBC is problematic because it increases the company’s share count and, therefore, reduces its value to Access the Rest of the IB Interview Guide 112 of 118 http://breakingintowallstreet.com existing investors, but it’s difficult to estimate the precise impact since you have to project the company’s share price to do that. So it’s better NOT to add it back as a non-cash expense on the Combined CFS and to keep the Buyer’s share count the same in all years. That way, you still reflect how SBC reduces a company’s value to existing investors and makes the deal more dilutive, but you don’t have to estimate the number of shares it creates. "
    },
    {
       "Type":"M&A"
      ,"Question":"Why might you calculate metrics such as Debt / EBITDA and EBITDA / Interest for the Combined Company in an M&A deal?"
      ,"Answer":" These metrics tell you whether the Combined Company could afford to use more Debt to fund a deal or if it’s using too much Debt to fund a deal. Sometimes it’s deceptive to look at a number like Debt / EBITA immediately after a deal closes because the Combined Company can de-lever rapidly by paying off Debt. So even if its Debt / EBITDA temporarily jumps up to a high level, such as 5x or 6x, if it can repay Debt quickly and bring it down to 2x or 3x in 1-2 years, it might be able to use more Debt to fund the initial deal. "
    },
    {
       "Type":"M&A"
      ,"Question":"How do Pro-Forma EPS and Pro-Forma accretion/dilution from the standard, or IFRS/GAAP-compliant, figures?"
      ,"Answer":" This one gets very confusing because there’s no “standard” definition for Pro-Forma EPS. But most people calculate it by adding back non-cash expenses created in an M&A deal, primarily the Amortization of Intangibles and the Depreciation of PP&E Write-Ups, and calculating Combined Net Income based on this “Pro-Forma” Pre-Tax Income. Some people also add back Stock-Based Compensation and other non-cash charges, effectively making Pro-Forma EPS into “Cash EPS.” Many companies report Pro-Forma EPS and calculate accretion/dilution based on these figures, but you should be skeptical because these numbers understate the true costs of acquisitions where Buyers pay high premiums."
    },
    {
       "Type":"DCF"
      ,"Question":"What’s the point of valuation? WHY do you value a company?"
      ,"Answer":" You value a company to determine its Implied Value according to your views of it. If this Implied Value is very different from the company’s Current Value, you might be able to invest in the company and make money if its value changes. If you are advising a client company, you might value it so you can tell management the price that it might receive if the company sells, which is often different from its Current Value"
    },
    {
       "Type":"DCF"
      ,"Question":"But public companies already have Market Caps and Share Prices. Why bother valuing them?"
      ,"Answer":" Because a company’s Market Cap and Share Price reflect its Current Value according to “the market as a whole” – but the market might be wrong! You value companies to see if the market’s views are correct or incorrect"
    },
    {
       "Type":"DCF"
      ,"Question":"What are the advantages and disadvantages of the 3 main valuation methodologies?"
      ,"Answer":" Public Comps are useful because they’re based on real market data, are quick to calculate and explain, and do not depend on far-in-the-future assumptions. However, there may not be truly comparable companies, the analysis will be less accurate for volatile or thinly traded companies, and it may undervalue companies’ long-term potential. Precedent Transactions are useful because they’re based on the real prices that companies have paid for other companies, and they may better reflect industry trends than Public Comps. However, the data is often spotty and misleading, there may not be truly comparable transactions, and specific deal terms and market conditions might distort the multiples. DCF Analysis is the most “correct” methodology according to finance theory, it’s less subject to market fluctuations, and it better reflects company-specific factors and long-term trends. However, it’s also very dependent on far-in-the-future assumptions, and there’s disagreement over the proper calculations for key figures like the Cost of Equity and WACC"
    },
    {
       "Type":"DCF"
      ,"Question":"Which of the 3 main methodologies will produce the highest Implied Values?"
      ,"Answer":" This is a trick question because almost any methodology could produce the highest Implied Values depending on the industry, time period, and assumptions. Precedent Transactions often produce higher Implied Values than the Public Comps because of the control premium – the extra amount that acquirers must pay to acquire sellers. But it’s tough to say how a DCF stacks up because it’s far more dependent on your assumptions. The best answer is: “A DCF tends to produce the most variable output since it’s so dependent on your assumptions, and Precedent Transactions tend to produce higher values than the Public Comps because of the control premium.”"
    },
    {
       "Type":"DCF"
      ,"Question":"When is a DCF more useful than Public Comps or Precedent Transactions?"
      ,"Answer":" You should pretty much always build a DCF since it IS valuation – the other methodologies are supplemental. But it’s especially useful when the company you’re valuing is mature and has stable, predictable cash flows, or when you lack good Public Comps or Precedent Transactions."
    },
    {
       "Type":"DCF"
      ,"Question":"When are Public Comps or Precedent Transactions more useful than the DCF?"
      ,"Answer":" If the company you’re valuing is early-stage, and it is impossible to estimate its future cash flows, or if the company has no path to positive cash flows, you have to rely on the other methodologies. These other methodologies can also be more useful when you run into problems in the DCF, such as an inability to estimate the Discount Rate or extremely volatile cash flows."
    },
    {
       "Type":"DCF"
      ,"Question":"Which one should be worth more: A $500 million EBITDA healthcare company or a $500 million EBITDA industrials company?"
      ,"Answer":" Assume the growth rates, margins, and all other financial stats are the same. In all likelihood, the healthcare company will be worth more because healthcare is a less asset-intensive industry. That means the company’s CapEx and Working Capital requirements will be lower, and its Free Cash Flow will be higher (i.e., closer to EBITDA) as a result. Healthcare, at least in some sectors, also tends to be more of a “growth industry” than industrials. The Discount Rate might also be higher for the healthcare company, but the lower asset intensity and higher expected growth rates would likely make up for that. However, this answer is an extreme generalization, so you would need more information to make a real decision."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you value an apple tree?"
      ,"Answer":" The same way you value a company: Comparables and a DCF. You’d look at what similar apple trees have sold for, and then calculate the expected future cash flows from this tree. You would then discount these cash flows to Present Value, discount the Terminal Value to PV, and add up everything to determine the apple tree’s Implied Value. The Discount Rate would be based on your opportunity cost – what you might be able to earn each year by investing in other, similar apple trees."
    },
    {
       "Type":"DCF"
      ,"Question":"People say that the DCF is an intrinsic valuation methodology, while Public Comps and Precedent Transactions are relative valuation. Is that correct?"
      ,"Answer":" No, not exactly. The DCF is based on the company’s expected future cash flows, so in that sense, it is “intrinsic valuation.” But the Discount Rate used in a DCF is linked to peer companies (market data), and if you use the Multiples Method to calculate Terminal Value, the multiples are also linked to peer companies. The DCF depends less on the market than the other methodologies, but there is still some dependency. It’s more accurate to say that the DCF is more of an intrinsic valuation methodology than the others. Return to Top. DCF Analysis – Walking Through and Explaining It Questions on how to set up a DCF are the most common ones in interviews. Even if you don’t understand the advanced items that go into the analysis, you must be able to walk through it. You must also understand the relationship between a DCF and other methodologies, and, in particular, why valuation multiples are shorthand for real valuation."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you build a DCF analysis to value a company?"
      ,"Answer":" You build a DCF analysis because a company is worth the Present Value of its expected future cash flows: Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), where Cash Flow Growth Rate < Discount Rate But you can’t just use that single formula because a company’s Cash Flow Growth Rate and Discount Rate change over time. So, in a Discounted Cash Flow analysis, you divide the valuation into two periods: One where those assumptions change (the explicit forecast period) and one where they stay the same (the Terminal Period). You then project the company’s cash flows in both periods and discount them to their Present Values based on the appropriate Discount Rate(s). Then, you compare this sum – the company’s Implied Value – to the company’s Current Value or “Asking Price” to see if it’s valued appropriately."
    },
    {
       "Type":"DCF"
      ,"Question":"Walk me through a DCF analysis."
      ,"Answer":" A DCF values a company based on the Present Value of its Cash Flows in the explicit forecast period plus the Present Value of its Terminal Value. You start by projecting the company’s Free Cash Flows over the next 5-10 years by making assumptions for revenue growth, margins, Working Capital, and CapEx. Then, you discount the cash flows using the Discount Rate, usually the Weighted Average Cost of Capital, and sum up everything. Next, you estimate the company’s Terminal Value using the Multiples Method or the Gordon Growth Method it represents the company’s value after those first 5-10 years into perpetuity. You then discount the Terminal Value to Present Value using the Discount Rate and add it to the sum of the company’s discounted cash flows. Finally, you compare this Implied Value to the company’s Current Value, usually its Enterprise Value, and you’ll often calculate the company’s Implied Share Price so you can compare it to the Current Share Price."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you move from Revenue to Free Cash Flow in a DCF?"
      ,"Answer":" First, confirm that the interviewer is asking for Unlevered Free Cash Flow (AKA Free Cash Flow to Firm). If so: Subtract COGS and Operating Expenses from Revenue to reach Operating Income (EBIT).Then, multiply Operating Income by (1 – Tax Rate), add back Depreciation & Amortization, and factor in the Change in Working Capital. If the company spends extra cash as it grows, the Change in Working Capital will be negative if it generates extra cash flow as a result of its growth, it will be positive. Finally, subtract Capital Expenditures to calculate Unlevered Free Cash Flow. Levered Free Cash Flow (Free Cash Flow to Equity) is similar, but you subtract the Net Interest Expense before multiplying by (1 – Tax Rate), and you also factor in changes in Debt principal."
    },
    {
       "Type":"DCF"
      ,"Question":"What does the Discount Rate mean?"
      ,"Answer":" The Discount Rate represents the opportunity cost for the investors – what they could earn by investing in other, similar companies in this industry. A higher Discount Rate means the risk and potential returns are both higher a lower Discount Rate means lower risk and lower potential returns. A higher Discount Rate makes a company less valuable because it means the investors have better options elsewhere a lower Discount Rate makes a company more valuable."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you calculate Terminal Value in a DCF, and which method is best?"
      ,"Answer":" You can use the Multiples Method or the Gordon Growth Method (AKA Long-Term Growth Method, Perpetuity Growth Method, etc.). With the first one, you apply a Terminal Multiple to the company’s EBITDA, EBIT, NOPAT, or FCF in the final year of the forecast period. For example, if you apply a 10x EV / EBITDA multiple to the company’s Year 10 EBITDA of $500, its Terminal Value is $5,000. With the Gordon Growth Method, you assign a “Terminal Growth Rate” to the company’s Free Cash Flows in the Terminal Period and assume they’ll grow at that rate forever. Terminal Value = Final Year Free Cash Flow * (1 + Terminal Growth Rate) / (Discount Rate – Terminal Growth Rate) The Gordon Growth Method is better because growth always slows down over time all companies’ cash flows eventually grow more slowly than GDP.If you use the Multiples Method, it’s easy to pick a multiple that makes no logical sense because it implies a growth rate that’s too high. However, many bankers still use and prefer the Multiples Method because it’s “easier” or because they don’t understand the need to cross-check the output."
    },
    {
       "Type":"DCF"
      ,"Question":"What are some signs that you might be using the incorrect assumptions in a DCF?"
      ,"Answer":" The most common signs of trouble are: 1. Too Much Value from the PV of Terminal Value – It usually accounts for at least 50% of the company’s total Implied Value, but it shouldn’t account for, say, 95% of its value.2. Implied Terminal Growth Rates or Terminal Multiples That Don’t Make Sense – If you pick a Terminal Multiple that implies a Terminal FCF Growth Rate of 8%, but the country’s long-term GDP growth rate is 3%, something is wrong.3. You’re Double-Counting Items – If an income or expense line item is included in FCF, you should not count the corresponding Asset or Liability in the Implied Enterprise Value  Implied Equity Value “bridge” at the end. And if a line item is excluded from FCF, you should count the corresponding Asset or Liability in the “bridge” at the end.4. Mismatched Final Year FCF Growth Rate and Terminal Growth Rate – If the company’s Free Cash Flow is growing at 15% in the final year, but you’ve assumed a 2% Terminal Growth Rate, something is wrong. FCF growth should decline over time and approach the Terminal Growth Rate by the end of the explicit forecast period."
    },
    {
       "Type":"DCF"
      ,"Question":"If your DCF seems off, what are the easiest ways to fix it?"
      ,"Answer":" The simplest method is to extend the explicit forecast period so that the company’s Free Cash Flow contributes more value, and so that there’s more time for FCF growth to slow down and approach the Terminal Growth Rate. So, if you’re using a 5-year forecast period, extend it to 10-15 years and reduce the company’s FCF growth in those extra years as it approaches maturity. To avoid double-counting items… look at what you’re doing and don’t double count!Finally, you can reduce the Terminal Value by picking a lower Terminal Growth Rate or lower Terminal Multiple. Terminal Value tends to be overstated in financial models because people don’t understand the theory behind it."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you interpret the results of a DCF?"
      ,"Answer":" You compare the company’s Implied Enterprise Value, Equity Value, or Share Price to its Current Enterprise Value, Equity Value, or Share Price to see if it might be overvalued or undervalued. You do this over a range of assumptions because investing is probabilistic. For example, if you believe that the company’s Implied Share Price is between $15.00 and $20.00, but its Current Share Price is $8.00, then that is good evidence that the company may be undervalued. But if its Current Share Price is $17.00, then it may be valued appropriately."
    },
    {
       "Type":"DCF"
      ,"Question":"Does a DCF ever make sense for a company with negative cash flows?"
      ,"Answer":" Yes, it may. A DCF is based on a company’s expected future cash flows, so even if the company is cash flow-negative right now, the analysis could work if it starts generating positive cash flows in the future. If the company has no path to positive cash flows, or you can’t reasonably forecast its cash flows, then the analysis doesn’t make sense."
    },
    {
       "Type":"DCF"
      ,"Question":"How do the Levered DCF Analysis and Adjusted Present Value (APV) Analysis differ from the Unlevered DCF?"
      ,"Answer":" In a Levered DCF, you use Levered FCF for the cash flows and Cost of Equity for the Discount Rate, and you calculate Terminal Value using Equity Value-based multiples such as P / E. You don’t back into Implied Equity Value at the end because the analysis produces the Implied Equity Value directly. An APV Analysis is similar to a traditional Unlevered DCF, but you value the company’s Interest Tax Shield separately and add the Present Value of this Tax Shield at the end.You still calculate Unlevered FCF and Terminal Value in the same way, but you use Unlevered Cost of Equity for the Discount Rate (i.e., Risk-Free Rate + Equity Risk Premium * Median Unlevered Beta from Public Comps). You then project the Interest Tax Shield each year, discount it at that same Discount Rate, calculate the Interest Tax Shield Terminal Value, discount it, and add up everything at the end."
    },
    {
       "Type":"DCF"
      ,"Question":"Will you get the same results from an Unlevered DCF and a Levered DCF?"
      ,"Answer":" No. The simplest explanation is that an Unlevered DCF does not factor in the interest rate on the company’s Debt, while the Levered DCF does. That alone will create differences, but the volatile cash flows in a Levered DCF (due to changes in Debt principal) will also contribute it’s very difficult to pick “equivalent assumptions” in both analyses."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you typically use the Unlevered DCF rather than the Levered DCF or APV Analysis?"
      ,"Answer":" The traditional Unlevered DCF is easier to set up, forecast, and explain, and it produces more consistent results than the other methods. With the other methods, you have to project the company’s Cash and Debt balances, Net Interest Expense, and changes in Debt principal, all of which require more time and effort. The Levered DCF sometimes produces odd results because Debt principal repayments can spike the Levered FCF up or down in individual years. The APV Analysis is flawed because it doesn’t factor in the main downside of Debt: Increased chances of bankruptcy. You can try to reflect this risk, but no one agrees on how to estimate it numerically. The Unlevered DCF solves this issue because WACC decreases with additional Debt, at first, but then starts increasing past a certain level, which reflects both the advantages and disadvantages of Debt.Calculating Unlevered FCF is simple if you remember the key rule: Include only recurring items that are related to the company’s core business and that are available to all the investor groups. There are some trickier topics, but you can answer 90% of interview questions by understanding that rule."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you calculate Unlevered Free Cash Flow by including and excluding various items on the financial statements?"
      ,"Answer":" Unlevered FCF must capture the company’s core, recurring line items that are available to ALL investor groups. That’s because Unlevered FCF corresponds to Enterprise Value, which also represents the value of the company’s core business available to all investor groups. So, if an item is NOT recurring, NOT related to the company’s core business, or NOT available to all investor groups, you leave it out. This rule explains why you exclude all of the following items: • Net Interest Expense – Only available to Debt investors. • Other Income / (Expense) – Corresponds to non-core-business Assets. • Most non-cash adjustments besides D&A – They’re non-recurring. • All Items in Cash Flow from Financing – They’re only available to certain investors. • Most of Cash Flow from Investing – Only CapEx is a recurring, core-business item."
    },
    {
       "Type":"DCF"
      ,"Question":"How does the Change in Working Capital affect Free Cash Flow, and what does it tell you about a company’s business model?"
      ,"Answer":" The Change in Working Capital tells you whether the company generates more cash than expected as it grows, or whether it requires more cash to fuel that growth. It’s related to whether a company records expenses and revenue before or after paying or collecting them in cash. For example, retailers tend to have negative values for the Change in Working Capital because they must pay for Inventory upfront before they can sell products.But subscription-based software companies often have positive values for the Change in Working Capital because they collect cash from long-term subscriptions upfront and recognize it as revenue over time. The Change in WC could increase or decrease the company’s Free Cash Flow, but it’s rarely a major value driver because it’s fairly small for most companies."
    },
    {
       "Type":"DCF"
      ,"Question":"Should you add back Stock-Based Compensation to calculate Free Cash Flow?"
      ,"Answer":" It’s a non-cash add-back on the Cash Flow Statement. No! You should consider SBC a cash expense in the context of valuation because it creates additional shares and dilutes the existing investors. By contrast, Depreciation & Amortization relate to timing differences: The company paid for a capital asset earlier on but recognizes that payment over many years. Stock-Based Compensation is a non-cash add-back on the Cash Flow Statement, but the context is different: Accounting rather than valuation. In a DCF, you should count SBC as a real cash expense or, if you count it as a non-cash add-back, you should reflect the additional shares by increasing the company’s diluted share count, which will reduce the Implied Share Price. Most DCFs get this completely wrong because they use neither approach: They pretend that SBC is a normal non-cash charge that makes no impact on the share count (wrong!)."
    },
    {
       "Type":"DCF"
      ,"Question":"What’s the proper tax rate to use when calculating FCF – the effective tax rate, the statutory tax rate, or the cash tax rate?"
      ,"Answer":" The company’s Free Cash Flows should reflect the cash taxes it pays. So, it doesn’t matter which rate you use as long as the cash taxes are correct. For example, you could use the company’s effective tax rate (Income Statement Taxes / Pre-Tax Income), and then include Deferred Taxes within the non-cash adjustments. Or you could calculate and use the company’s “cash tax rate” and skip the Deferred Tax adjustments. You could even use the statutory tax rate and make adjustments for state/local taxes and other items to arrive at the company’s real cash taxes.It’s most common to use the effective tax rate and then adjust for Deferred Taxes based on historical trends."
    },
    {
       "Type":"DCF"
      ,"Question":"How should CapEx and Depreciation change within the explicit forecast period?"
      ,"Answer":" Just like the company’s Free Cash Flow growth rate should decline in the explicit forecast period, the company’s CapEx and Depreciation should also decline. High-growth companies tend to spend more on Capital Expenditures to support their growth, but this spending declines over time as the companies move from “growth” to “maintenance.” If the company’s FCF is growing, CapEx should always exceed Depreciation, but there may be less of a difference by the end. Also, if the company’s FCF is growing, CapEx should not equal Depreciation – even in the Terminal Period. That’s partially due to inflation (capital assets purchased 5-10 years ago cost less), and partially because Net PP&E must keep growing to support FCF Growth in the Terminal Period. If you’re assuming that the company’s FCF stagnates or declines, then you might use different assumptions."
    },
    {
       "Type":"DCF"
      ,"Question":"Should you reflect inflation in the FCF projections?"
      ,"Answer":" In most cases, no. Clients and investors tend to think in nominal terms, and assumptions for prices and salaries tend to be based on nominal figures. If you reflect inflation, then you also need to forecast inflation far into the future and adjust all figures in your analysis. That’s rarely worthwhile because of the uncertainty, extra work, and extra explanations required."
    },
    {
       "Type":"DCF"
      ,"Question":"If the company’s capital structure is expected to change, how do you reflect it in FCF?"
      ,"Answer":" You’ll reflect it directly in a Levered DCF because the company’s Net Interest Expense and Debt principal will change over time. You’ll also change the Cost of Equity over time to reflect this.The changing capital structure won’t show up explicitly in Unlevered FCF, but you will still reflect it in the analysis with the Discount Rate – WACC will change as the company’s Debt and Equity levels change."
    },
    {
       "Type":"DCF"
      ,"Question":"What’s the relationship between including an income or expense line item in FCF and the Implied Equity Value calculation at the end of the DCF?"
      ,"Answer":" If you include an income or expense line item in Free Cash Flow, then you should exclude the corresponding Asset or Liability when moving from Implied Enterprise Value to Implied Equity Value at the end (and vice versa for items you exclude). For example, if you capitalize the company’s operating leases and count them as a Debt-like item at the end, then you should exclude the rental expense from FCF, making it higher. This rule also explains why you factor in Cash and Debt when moving to the Implied Equity Value in an Unlevered DCF: You’ve excluded the corresponding items on the Income Statement (Interest Income and Interest Expense)."
    },
    {
       "Type":"DCF"
      ,"Question":"How do Net Operating Losses (NOLs) factor into Free Cash Flow?"
      ,"Answer":" You could set up an NOL schedule and apply the NOLs to reduce the company’s cash taxes, also factoring in NOL accruals if the company earns negative Pre-Tax Income. If you do this, then you don’t need to count the NOLs in the Implied Enterprise Value  Implied Equity Value calculation at the end. However, it’s far easier to skip that separate schedule and add NOLs as a non-core-business Asset in this calculation at the end. Beyond the extra work, one problem with the first approach is that the company may not use all of its NOLs by the end of the explicit forecast period!"
    },
    {
       "Type":"DCF"
      ,"Question":"Should you ever include items such as asset sales, impairments, or acquisitions in FCF?"
      ,"Answer":" For the most part, no. You certainly shouldn’t make speculative projections for these items – they are all non-recurring. If a company has announced plans to sell an asset, make an acquisition, or record a write-down in the near future, then you might factor it into FCF for that year. And if it’s an acquisition or divestiture, you’ll have to adjust FCF to reflect the cash spent or received, and you’ll have to change the company’s cash flow after the deal takes place. Return to Top.DCF Analysis – Discount Rates and WACC Questions related to the Discount Rate and WACC in a DCF are surprisingly tricky because it’s not always easy to explain how the assumptions are linked. You don’t need to know every single detail of these calculations, but you should know the intuition behind everything. If you know that the Discount Rate represents the opportunity cost and that the Debt and Equity levels affect all investors, you can answer many of these questions."
    },
    {
       "Type":"DCF"
      ,"Question":"What does the Cost of Equity mean intuitively?"
      ,"Answer":"It tells you the average percentage a company’s stock “should” return each year, over the very long term, factoring in both stock-price appreciation and dividends. In a valuation, it represents the percentage an Equity investor might earn each year (averaged over decades). To a company, the Cost of Equity represents the cost of funding its operations by issuing additional shares to investors. The company “pays for” Equity via potential Dividends (a real cash expense) and also by diluting existing investors (thereby giving up stock-price appreciation potential)."
    },
    {
       "Type":"DCF"
      ,"Question":"What does WACC mean intuitively?"
      ,"Answer":" WACC is similar to Cost of Equity, but it’s the expected annual return if you invest proportionately in all parts of the company’s capital structure – Debt, Equity, Preferred Stock, and anything else it has. To a company, WACC represents the cost of funding its operations by using all its sources of capital and keeping its capital structure percentages the same over time. Investors might invest in a company if their expected IRR exceeds WACC, and a company might decide to fund a new project, acquisition, or expansion if its expected IRR exceeds WACC."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you calculate Cost of Equity?"
      ,"Answer":" Cost of Equity = Risk-Free Rate + Equity Risk Premium * Levered Beta The Risk-Free Rate represents what you would earn on \"risk-free\" government bonds denominated in the same currency as the company’s cash flows. You usually use 10-year or 20-year bonds to match the explicit forecast period of the DCF. Levered Beta represents how volatile this stock is relative to the market as a whole, factoring in both intrinsic business risk and risk from leverage. And the Equity Risk Premium represents how much the stock market in the company’s country will return above the “risk-free” government bond in the long term. Stocks are riskier and have higher potential returns than government bonds, so you take the rate of return on those government bonds, add the extra returns you could get from the stock market, and then adjust for this company’s specific risk and potential returns."
    },
    {
       "Type":"DCF"
      ,"Question":"If a company operates in the EU, U.S., and U.K., what should you use for its Risk-Free Rate?"
      ,"Answer":" You should use the rate on the government bonds denominated in the currency of the company’s cash flows. So, if the company reports its financials in USD, you might use the 10-year U.S. Treasury Rate"
    },
    {
       "Type":"DCF"
      ,"Question":"What should you use for the Risk-Free Rate if government bonds in the country are NOT risk-free (e.g., Greece)?"
      ,"Answer":" One option is to take the Risk-Free Rate in a country that is “risk-free,” like the U.S. or U.K., and then add a default spread based on your country’s credit rating. For example, you might start with a rate of 2.5% for 10-year U.S. Treasuries and then add a spread of 11.2% for Greece based on its current credit rating. That rate of 13.7% represents how yields are much higher in Greece due to the significant chance of government default."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you calculate the Equity Risk Premium?"
      ,"Answer":" Stock-market returns differ based on the period and whether you use an arithmetic mean, a geometric mean, or other approaches, so there’s no universal method. Many firms use a publication called “Ibbotson’s” that publishes Equity Risk Premium data for companies of different sizes in different industries each year"
    },
    {
       "Type":"DCF"
      ,"Question":"How do you calculate the Equity Risk Premium for a multinational company that operates in many different geographies?"
      ,"Answer":" You might take the percentage revenue earned in each country, multiply it by the ERP in that market, and then add up everything to get the weighted average ERP. To calculate the ERP in each market, you might use one of the methods described in the previous question. The “Historical U.S. stock market returns + default spread” approach is common here."
    },
    {
       "Type":"DCF"
      ,"Question":"What does Beta mean intuitively?"
      ,"Answer":" Levered Beta tells you how volatile a company’s stock price is relative to the stock market as a whole, factoring in both intrinsic business risk and risk from leverage (i.e., Debt). If Beta is 1.0, when the market goes up 10%, this company’s stock price also goes up by 10%. If Beta is 2.0, when the market goes up 10%, this company’s stock price goes up by 20%. Unlevered Beta excludes the risk from leverage and reflects only the intrinsic business risk, so it’s always less than or equal to Levered Beta."
    },
    {
       "Type":"DCF"
      ,"Question":"Could Beta ever be negative?"
      ,"Answer":" Yes, it’s possible. The company’s stock price must move in the opposite direction of the entire market for Beta to be negative. Gold is commonly cited as an Asset that has a negative Beta because it often performs better when the stock market declines, and it acts as a “hedge” against disastrous macroeconomic events. However, negative Betas for companies are quite rare and usually revert to positive figures, even if they’re negative for short periods."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you have to un-lever and re-lever Beta when calculating the Cost of Equity?"
      ,"Answer":" You don’t “have to” un-lever and re-lever Beta: You could just use the company’s historical Beta, i.e., its own Levered Beta, and skip this step.But in a valuation, you’re estimating the company’s Implied Value – what it should be worth. The historical Beta corresponds more closely to the company’s Current Value – what the market says it’s worth today. By un-levering Beta for each comparable company, you isolate each company’s inherent business risk. Each company might have a different capital structure, so it’s important to remove the risk from leverage and isolate just the inherent business risk. You then take the median Unlevered Beta from these companies and re-lever it based on the capital structure (targeted or actual) of the company you’re valuing. You do this because there will always be business risk and risk from leverage, so you need to reflect both for the company you’re valuing. You can think of the result – Re-Levered Beta – as: “What the volatility of this company’s stock price, relative to the market as a whole, should be, based on the median business risk of its peer companies and this company’s capital structure.”"
    },
    {
       "Type":"DCF"
      ,"Question":"What are the formulas for un-levering and re-levering Beta, and what do they mean?"
      ,"Answer":" Assuming the company has only Equity and Debt: Unlevered Beta = Levered Beta / (1 + Debt / Equity Ratio * (1 – Tax Rate)) Levered Beta = Unlevered Beta * (1 + Debt / Equity Ratio * (1 – Tax Rate)) If the company has Preferred Stock, you add another term for the Preferred / Equity Ratio. You use a “1 +” in front of Debt / Equity Ratio * (1 – Tax Rate) to ensure that Unlevered Beta is always less than or equal to Levered Beta. And you multiply the Debt / Equity Ratio by (1 – Tax Rate) because the tax-deductibility of interest reduces the risk of Debt. The formulas reduce Levered Beta to represent the removal of risk from leverage, but they increase Unlevered Beta to represent the addition of risk from leverage."
    },
    {
       "Type":"DCF"
      ,"Question":"In those formulas, you’re not factoring in the interest rate on Debt. Isn’t that wrong?"
      ,"Answer":" More expensive Debt should be riskier.Yes, this is one drawback. However: 1. The Debt / Equity ratio is a proxy for interest rates on Debt because companies with high Debt / Equity ratios tend to pay higher interest rates as well.2. The risk isn’t directly proportional to interest rates. Higher interest on Debt will result in lower coverage ratios (EBITDA / Interest) and, therefore, more risk, but it’s not as simple as saying, “Interest is now 4% rather than 1% – risk is 4x higher.” An interest rate that’s 4x higher might barely change a large company’s financial profile, but it might make a much bigger difference for a small company."
    },
    {
       "Type":"DCF"
      ,"Question":"Do you still un-lever and re-lever Beta even when you’re using Unlevered FCF?"
      ,"Answer":" Yes. Un-levering and re-levering Beta has nothing to do with Unlevered vs. Levered FCF. A company’s capital structure affects both the Cost of Equity and WACC, so you un-lever and re-lever Beta regardless of the type of Free Cash Flow you’re using."
    },
    {
       "Type":"DCF"
      ,"Question":"What are some different ways to calculate Beta in the Cost of Equity calculation?"
      ,"Answer":" Some people argue that you should use the Predicted Beta instead of the Historical Beta because the Cost of Equity relates to expected future returns. If you do use historical data, you could use the company’s Historical Beta or the re-levered Beta based on comparable companies. And if you re-lever Beta, you could do it based on the company’s current capital structure, its targeted or “optimal” structure, or the capital structure of the comparable companies. Most of these methods produce similar results, and you always use a range of values when calculating Cost of Equity and WACC."
    },
    {
       "Type":"DCF"
      ,"Question":"How would you estimate the Cost of Equity for a U.S.-based technology company?"
      ,"Answer":" This question tests your ability to make a guesstimate based on common sense and your knowledge of current market rates.You might say, “The Risk-Free Rate is around 1.5% for 10-year U.S. Treasuries. A tech company like Salesforce is more volatile than the market as a whole, with a Beta of around 1.5. So, if you assume an Equity Risk Premium of 8%, Cost of Equity might be around 13.5%.” The numbers will change based on market conditions, but that’s the idea."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you calculate WACC, and what makes it tricky?"
      ,"Answer":" The formula for WACC is simple: WACC = Cost of Equity * % Equity + Cost of Debt * (1 – Tax Rate) * % Debt + Cost of Preferred Stock * % Preferred Stock But it’s tricky to calculate because of the ambiguity with many of these items: 1. Cost of Debt: Do you use the weighted average coupon rate on the company’s bonds? Or the Yield to Maturity (YTM)? Or the YTM of Debt from comparable companies?2. Percentages of Debt, Equity, and Preferred Stock: Do you use the company’s current capital structure, “optimal” structure, or targeted structure? Or do you use the median percentages from the comparable public companies?3. Cost of Equity: There are different ways to calculate Beta, and no one agrees on the Equity Risk Premium."
    },
    {
       "Type":"DCF"
      ,"Question":"WACC reflects the company’s entire capital structure, so why do you pair it with Unlevered FCF?"
      ,"Answer":" It’s not capital structure-neutral! Think of Unlevered FCF as “Free Cash Flow to Firm,” or FCFF, instead. And think of this relationship as: “Unlevered FCF, or FCFF, is available to ALL investors, and WACC represents ALL investors. Therefore, you pair WACC with Unlevered FCF.” No Discount Rate can be “capital structure-neutral” since each part of a company’s capital structure affects the other parts. “Capital-structure neutrality” is a property of Free Cash Flow, not the Discount Rate."
    },
    {
       "Type":"DCF"
      ,"Question":"Should you use the company’s current capital structure or optimal capital structure to calculate WACC?"
      ,"Answer":"A company’s “optimal” capital structure is the one that minimizes its WACC. But there’s no way to calculate it because you can’t tell in advance how the Costs of Equity, Debt, and Preferred will change as the capital structure changes. So, in practice, you’ll often use the median capital structure percentages from the comparable public companies as a proxy for the “optimal” capital structure. It’s the same as the logic for un-levering and re-levering Beta: You want to capture what this company’s capital structure should be, not what it is right now. It’s better to use this expected capital structure because the company’s Implied Value in a DCF is based on its expected, future cash flows."
    },
    {
       "Type":"DCF"
      ,"Question":"Should you use Total Debt or Net Debt to determine the capital structure percentages in the WACC calculation?"
      ,"Answer":" Some textbooks claim that you should use Equity Value + Debt + Preferred Stock – Cash, rather than Equity Value + Debt + Preferred Stock, for the denominator of the capital structure percentages. However, we disagree with this approach for several reasons: 1) Cash Does Not “Offset” Debt – For example, many forms of Debt do not allow for early repayment or penalize the company for early repayment. So, a high Cash balance doesn’t necessarily reduce the risk of Debt on a 1:1 basis.2) You May Get Nonsensical Results with High Cash Balances – For example, if the company’s Cash exceeds its Debt, Debt as a Percentage of Total Capital will be far too low. This will artificially inflate the Discount Rate since Equity is more expensive than Debt for most companies."
    },
    {
       "Type":"DCF"
      ,"Question":"Why is Equity more expensive than Debt?"
      ,"Answer":" Because it offers higher risk and higher potential returns.Expected stock market returns (plus dividends) exceed the interest rates on Debt in most cases, which already makes the Cost of Equity higher. But the interest on Debt is also tax-deductible, which further reduces its cost. In developed markets like the U.S., the average annualized stock market return is around 10-11%. So, a company with a Beta of 1.0 will have a Cost of Equity in that range. For the Cost of Debt to be higher, the Pre-Tax Cost would have to be ~17-18% at a 40% tax rate. Hardly any Debt has interest rates that high."
    },
    {
       "Type":"DCF"
      ,"Question":"How does the Cost of Preferred Stock compare with the Costs of Debt and Equity?"
      ,"Answer":" Preferred Stock tends to be more expensive than Debt but less expensive than Equity: It offers higher risk and potential returns than Debt, but lower risk and potential returns than Equity. That’s because the coupon rates on Preferred Stock tend to be higher than the rates on Debt, and Preferred Dividends are not tax-deductible. But these rates are still lower than expected stock market returns. The risk is also lower since Preferred Stock investors have a higher claim on the company’s Assets than Equity investors."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you determine the Cost of Debt and Cost of Preferred Stock in the WACC calculation, and what do they mean?"
      ,"Answer":" These Costs represent the rates a company would pay if it issued additional Debt or additional Preferred Stock. There is no way to observe these rates directly, but you can estimate them. For example, you could calculate the weighted average coupon rate on the company’s existing Debt or Preferred Stock or the median coupon rate on the outstanding issuances of comparable public companies. You could also use the Yield to Maturity (YTM), which reflects the market prices of the bonds (a bond with a coupon rate of 5% that’s trading at a discount to par value will have a YTM higher than 5%). Finally, you could also take the Risk-Free Rate and add a default spread based on the company’s expected credit rating if it issues more Debt or Preferred Stock. If you think its creditrating will fall from BB+ to BB after issuing Debt, you’d look up the average spread for BB-rated companies and add it to the Risk-Free Rate."
    },
    {
       "Type":"DCF"
      ,"Question":"How do convertible bonds factor into the WACC calculation?"
      ,"Answer":" If the company’s current share price exceeds the conversion price of the bonds, you count the bonds as Equity and factor them in by using a higher diluted share count, resulting in a higher Equity Value for the company and a greater Equity weighting in the WACC formula. But if the bonds are not currently convertible, you count them as Debt and use the coupon rate (or YTM, or another method) to calculate their Cost. Convertible bonds offer lower coupon rates than standard corporate bonds, so you should use the rate on equivalent, non-convertible bonds. Convertible bonds almost always reduce WACC when they count as Debt since the Cost of Debt is lower than the Cost of Equity."
    },
    {
       "Type":"DCF"
      ,"Question":"How do the Cost of Equity, Cost of Debt, and WACC change as a company uses more Debt?"
      ,"Answer":" The Cost of Equity and Cost of Debt always increase because more Debt increases the risk of bankruptcy, which affects all investors. As a company goes from no Debt to some Debt, WACC decreases at first because Debt is cheaper than Equity, but it starts increasing at higher levels of Debt as the risk of bankruptcy starts to outweigh the lower Cost of Debt. However, the exact impact depends on where you are on that curve. If the company already has a very high level of Debt, WACC is likely to increase with more Debt"
    },
    {
       "Type":"DCF"
      ,"Question":"How do those figures change as the company uses less Debt?"
      ,"Answer":" The Cost of Equity and Cost of Debt decrease for the reasons stated above: Less Debt means a lower risk of bankruptcy and, therefore, less risk for all investors.WACC could go either way depending on where you are on the curve. If the company already has a very high level of Debt, WACC will likely decrease with less Debt"
    },
    {
       "Type":"DCF"
      ,"Question":"If a company previously used 20% Debt and 80% Equity, but it just paid off all its Debt, how does that affect its WACC?"
      ,"Answer":" It depends on how you’re calculating WACC. If you’re using the company’s current capital structure, WACC will most likely increase because 20% Debt is a fairly low level. At that low level, the benefits of Debt still outweigh its risks, so less Debt will increase WACC. But if you’re using the targeted, optimal, or median capital structure from the comparable companies, this change won’t affect WACC because you’re not using the company’s current capital structure at all."
    },
    {
       "Type":"DCF"
      ,"Question":"Should you ever use *different* Discount Rates for different years in a DCF?"
      ,"Answer":" Yes, sometimes it makes sense to use different Discount Rates. For example, if a company is growing quickly right now, but is expected to grow more slowly in the future, you might decrease the Discount Rate each year until the company reaches maturity. So, if the company’s current WACC is between 11% and 13%, and WACC for mature companies in the industry is between 8% and 9%, you might start it at 12% and then reduce it by 0.4% in each year of the explicit forecast period until it reaches 8.4% by the end. It makes less sense to do this if the company is already mature and is not expected to change much over time. Return to Top."
    },
    {
       "Type":"DCF"
      ,"Question":"What is the difference between the explicit forecast period and the Terminal Period in a DCF?"
      ,"Answer":" The company’s Free Cash Flow Growth Rate, and possibly its Discount Rate, change over time in the explicit forecast period since the company is still growing and changing. But in the Terminal Period, you assume that the company remains in a “steady state” forever: Its Free Cash Flow grows at the same rate each year, and its Discount Rate remains the same."
    },
    {
       "Type":"DCF"
      ,"Question":"What’s the intuition behind the Gordon Growth formula for Terminal Value?"
      ,"Answer":" The typical formula is: Terminal Value = Final Year FCF * (1 + Terminal FCF Growth Rate) / (Discount Rate – Terminal FCF Growth Rate) But it’s more intuitive to think of it as: Terminal Value = FCF in Year 1 of Terminal Period / (Discount Rate – Terminal FCF Growth Rate) A company is worth less if the Discount Rate is higher and worth more if the Terminal FCF Growth Rate is higher. For example, let’s say the company’s FCF is not growing, and its Discount Rate is 10%. It has $100 in FCF in the first year of the Terminal Period. You would be willing to pay $100 / 10%, or $1,000, so the Terminal Value is $1,000. If the Discount Rate falls to 5%, now you’d pay $100 / 5%, or $2,000. If it increases to 20%, you’d pay $100 / 20%, or $500. The company is worth more when you have worse investment options elsewhere, and worth less when you have better investment options elsewhere. Now let’s say the company’s FCF is growing. If it grows by 3% per year, you’d be willing to pay $100 / (10% – 3%), or ~$1,429 for it. But if its FCF growth rate increases to 5% per year, you’d be willing to pay $100 / (10% – 5%), or $2,000, for it. Higher growth lets you achieve the same targeted return even when you pay more."
    },
    {
       "Type":"DCF"
      ,"Question":"If you use the Multiples Method to calculate Terminal Value, do you use the multiples from the Public Comps or Precedent Transactions?"
      ,"Answer":" Neither one – you just use them as starting points in the analysis, and then you adjust once you’ve calculated the Terminal FCF Growth Rates implied by the selected multiples. It’s better to start with the multiples from the Public Comps, ideally the ones from 1-2 years into the future, because you don’t want to reflect the control premium inherent in Precedent Transactions, at least not if you’re completing a standalone valuation of the company. Then, if the multiples imply a reasonable Terminal FCF Growth Rate, you might stick with your initial guess"
    },
    {
       "Type":"DCF"
      ,"Question":"How do you pick the Terminal Growth Rate when you calculate the Terminal Value using the Gordon Growth Method?"
      ,"Answer":" This growth rate should be below the country’s long-term GDP growth rate and in-line with other macroeconomic variables like the rate of inflation. For example, if you’re in a developed country where the expected long-term GDP growth rate is 3.0%, you might use numbers ranging from 1.5% to 2.5% for the range of Terminal Growth Rates. You should NOT pick a rate above the country’s long-term GDP growth rate because the company will become bigger than the economy as a whole after a certain point! You can then check your work by calculating the Terminal Multiples implied by these growth rates."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you need to discount the Terminal Value back to its Present Value?"
      ,"Answer":" Because the Terminal Value represents the Present Value of the company’s cash flows from the very end of the explicit forecast period into perpetuity. In other words, it represents the company’s value IN a future period AT a point in the future. Valuation tells you what a company is worth TODAY, so any “future value” must always be discounted back to its Present Value. If you did not discount the Terminal Value, you’d greatly overstate the company’s Implied Value because you’d be acting as if its Year 6, 11, or 16 cash flows arrived next year."
    },
    {
       "Type":"DCF"
      ,"Question":"When you discount the Terminal Value, why do you use the number of the last year in the forecast period for the discount period (for example, 10 for a 10-year forecast)?"
      ,"Answer":" Shouldn’t you use 11 since Terminal Value represents the Present Value of cash flows starting in Year 11? No. The Terminal Value does represent the Present Value of cash flows starting in Year 11, but it’s the Present Value as of the very end of Year 10. You would use 11 for the discount period only if your explicit forecast period went to Year 11 and the Terminal Period started in Year 12."
    },
    {
       "Type":"DCF"
      ,"Question":"What do you do after summing the PV of Terminal Value and the PV of Free Cash Flows?"
      ,"Answer":" If you’re building a Levered DCF analysis, you’re almost done because this summation gives you the company’s Implied Equity Value. The last step is to divide the company’s Implied Equity Value by its diluted share count to get its Implied Share Price (if the company is public). In an Unlevered DCF, the PV of Terminal Value + PV of Free Cash Flows equals the company’s Implied Enterprise Value, so you have to “back into” the Implied Equity Value and then calculate its Implied Share Price. You do this by adding non-core-business Assets (Cash, Investments, etc.) and subtracting Liability and Equity items that represent other investor groups (Debt, Preferred Stock, Noncontrolling Interests, etc.). Then, you divide by the company’s diluted share count to get its Implied Share Price."
    },
    {
       "Type":"DCF"
      ,"Question":"The diluted share count includes dilution from the company’s in-the-money options. But what about its out-of-the-money options?"
      ,"Answer":" Shouldn’t you account for them in a DCF? In theory, yes. Some professors, such as Damodaran, use Black-Scholes to value these out-of-the-money options and then subtract them to determine the company’s Implied Equity Value. In practice, banks rarely include out-of-the-money options in a DCF. These options tend to make a small impact on most companies, and options valuation is tricky and requires inputs that you may or may not have. So, it is usually not worth the time and effort."
    },
    {
       "Type":"DCF"
      ,"Question":"How can you check whether or not your Terminal Value estimate is reasonable?"
      ,"Answer":" It’s an iterative process: You start by entering a range of assumptions for the Terminal Multiple or Terminal FCF Growth Rate, and then you cross-check your assumptions by calculating the Growth Rates or Multiples they imply. If it seems wrong, then you adjust the range of Terminal Multiples or Terminal FCF Growth Rates until you get more reasonable results. Example: You start by picking 10x EV / EBITDA for the Terminal Multiple. At a Discount Rate of 12%, this multiple implies a Terminal FCF Growth Rate of 5%, which is too high. So, you reduce it to 6x EV / EBITDA, but now the Implied Terminal FCF Growth Rate drops to 1%, which is too low. So, you guess 8x EV / EBITDA, which implies a Terminal FCF Growth Rate of 2.3%. That is more reasonable since it’s below the expected long-term GDP growth rate, but it’s also slightly above the inflation rate. This 8x figure might be your “Baseline Terminal Multiple,” so you would start there and go slightly above and below it in the sensitivity tables."
    },
    {
       "Type":"DCF"
      ,"Question":"What’s one problem with using EV / EBITDA multiples to calculate Terminal Value?"
      ,"Answer":" The biggest issue is that EBITDA ignores CapEx. Two companies with similar EV / EBITDA multiples might have very different Free Cash Flow and FCF growth figures. As a result, their Implied Values might differ significantly even if they have similar EV / EBITDA multiples. You may get better results by using EV / EBIT, EV / NOPAT, or EV / Unlevered FCF, but those multiples create other issues, such as less comparability across peer companies. This problem is one reason why the Gordon Growth Method is still the “real” way to calculate Terminal Value."
    },
    {
       "Type":"DCF"
      ,"Question":"Would it ever make sense to use a negative Terminal FCF Growth Rate?"
      ,"Answer":" Yes. For example, if you’re valuing a biotech or pharmaceutical company and the patent on its key drug expires within the explicit forecast period, you might assume that the company’s cash flows eventually decline to $0.A negative Terminal FCF Growth Rate represents your expectation that the company will stop generating cash flow eventually. It doesn’t make the company “worthless”"
    },
    {
       "Type":"DCF"
      ,"Question":"How can you determine which assumptions to analyze in sensitivity tables for a DCF? The same assumptions make a big impact in any DCF: The Discount Rate, the Terminal FCF Growth Rate or Terminal Multiple, and the revenue growth and margin figures. It doesn’t make sense to sensitize much else – the assumptions for CapEx and Working Capital, for example, tend to make a small difference. There may also be industry-specific assumptions that are worth sensitizing, such as the patent expiration dates for drugs in the biotech/pharmaceutical industry."
      ,"Answer":""
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you use the mid-year convention in a DCF analysis?"
      ,"Answer":" You use it because a company’s cash flows do not arrive 100% at the end of each year – the company generates cash flow throughout each year. Using 1, 2, 3, 4 for the discount periods implies that the first year’s cash flow arrives after one entire year has passed. If you use 0.5, 1.5, 2.5, 3.5 instead, you assume that only half a year passes before the first cash flow is generated, which is a better approximation of real life."
    },
    {
       "Type":"DCF"
      ,"Question":"What impact does the mid-year convention make?"
      ,"Answer":"A DCF that uses the mid-year convention will produce higher Implied Values because the discount periods are lower. A formula like this: Present Value = $100 / ((1 + 10%) ^ Year#) Will produce higher values because the Year # of the first period would be 1.0 without the mid-year convention, but 0.5 with the mid-year convention."
    },
    {
       "Type":"DCF"
      ,"Question":"Why might you include a “stub period” in a DCF, and what does it mean?"
      ,"Answer":" You might include a “stub period” if you’re valuing a company midway through the year, and it has already reported some of its financial results for the year. A DCF is based on expected future cash flow, so you should exclude these previously reported results and adjust the discount periods as well. For example, maybe it’s September 30th, and the company’s fiscal year ends on December 31st. The company’s future cash flow for this year will be generated between September 30th and December 31st. Therefore, you should exclude the cash flow from January 1st to September 30th in your projections since that part of the year has already passed. So, for the first year in the analysis, you would include only the projected FCF from September 30th to December 31st. To discount the FCF in that 3-month period, you would use 0.25 for the discount period because 3 months is 25% of the year. You would then use 1.25 for the discount period of the next year, 2.25 for the year after that, and so on."
    },
    {
       "Type":"DCF"
      ,"Question":"You’re valuing a company on April 30th, and you want to include both the stub period and the mid-year convention in your analysis. How would you change the company’s Free Cash Flow, and which discount periods would you use?"
      ,"Answer":" For the FCF, you would exclude everything generated between January 1st and April 30th and include only the projected FCF to be generated between April 30th and December 31st.Since most companies report only quarterly results, you would most likely exclude the first quarter, not exactly the first 4 months. To reflect both the stub period and the mid-year convention, you would divide the stub period of the first year by 2. And then in each year after that, you would subtract 0.5 from the “normal” discount period. In this case, April 30th is 1/3 through the year. Two-thirds of the year remains, so the “normal” stub discount period is 0.67. You would divide that by 2 to get 0.34. You would then use that 0.34 period to discount the company’s FCF from April 30th to December 31st. The “normal” discount period of the next year would be 0.67 + 1.00, or 1.67. So, you would take the 1.67 and subtract 0.50 to get 1.17. For the next year after that, the “normal” discount period is 0.67 + 2.00, or 2.67, so you would subtract 0.50 to get 2.17. You would continue that for the rest of the years in the forecast."
    },
    {
       "Type":"DCF"
      ,"Question":"Continuing with the same example, how would the Terminal Value and PV of Terminal Value change with this April 30th valuation?"
      ,"Answer":" It depends on how you calculate the Terminal Value. With the Multiples Method, the Terminal Value calculation stays the same since it’s based on the company’s EBITDA (or another metric) in the final projected year times an appropriate multiple. When you discount the Terminal Value, the stub period affects the discount period, but the mid-year convention does not because the Terminal Value is as of the END of the last projected year. So, if the valuation date is April 30th, and there are 10 years in the projection period, you would use 9.67 for the discount period to calculate the PV of the Terminal Value. With the Gordon Growth Method, if you’re using the mid-year convention, you must adjust the Terminal Value by multiplying it by (1 + Discount Rate) ^ 0.5. You do this because the normal formula – FCF in Year 1 of Terminal Period / (Discount Rate – Terminal Growth Rate) – gives you the Present Value at Year 10.5 if you’re using the mid-year convention. When you multiply by (1 + Discount Rate) ^ 0.5, you “move back the Terminal Value” to Year 10.0 instead. it just means that the company will be worth less.Discounting the Terminal Value works the same way as it does with the Multiples Method: Only the stub period affects it. So, you would also use 9.67 for the discount period."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you need to adjust the Terminal Value when you use the mid-year convention? Can’t you just discount it to Present Value using a different discount period?"
      ,"Answer":" Yes, you could discount the Terminal Value to its Present Value by using a different discount period instead. However, the Terminal Values calculated via both methods should be directly comparable. In other words, BOTH Terminal Values should be as of the end of Year 10 in a 10-year analysis. If you do not adjust the Terminal Value produced by the Gordon Growth Method, and you’re using the mid-year convention, you cannot compare it to the Terminal Value produced by the Multiples Method because one TV is as of Year 10.0, and the other is as of Year 10.5."
    },
    {
       "Type":"DCF"
      ,"Question":"Why might you create a “Normalized Terminal Year” in a DCF?"
      ,"Answer":" You might create a Normalized Terminal Year if something about the company’s revenue growth, margins, Working Capital, or CapEx is expected to change in a major way in the Terminal Period. As a result of this change, multiplying Final Year FCF by (1 + Terminal FCF Growth Rate) won’t produce accurate results in the Terminal Value formula. For example, a key drug patent might expire in Year 9 or 10, or the company might have a huge Intangibles balance that gets completely amortized in Year 10. The first scenario would make a huge impact on the company’s revenue, growth rates, and margins, and the second would affect the company’s margins and non-cash add-backs. You use the FCF in this Normalized Year for the numerator in the Terminal Value calculation rather than multiplying Final Year FCF by (1 + Terminal FCF Growth Rate)."
    },
    {
       "Type":"DCF"
      ,"Question":"What impact does the Normalized Terminal Year make?"
      ,"Answer":" Technically, it could go either way, but in most cases, the Normalized Terminal Year will reduce a company’s Implied Value because you often adjust down the company’s growth rates andmargins in this year (and remove non-cash adjustments that might have benefited the company in previous periods). Return to Top.Factors That Affect a DCF Analysis This section is short because much of it has been covered in the previous sections. Interviewers like to ask these questions because they test whether or not you understand the big picture. Anyone can memorize a DCF walkthrough, but you can answer these questions only if you understand the underlying concepts."
    },
    {
       "Type":"DCF"
      ,"Question":"Which assumptions make the biggest impact on a DCF?"
      ,"Answer":" The Discount Rate and Terminal Value make the biggest impact on the DCF. That’s because the Discount Rate affects the PV of everything and because the PV of the Terminal Value often represents 50%+ of the company’s Implied Value. The assumptions for revenue growth and operating margins also make a significant impact, but less than the ones above. Other items, such as CapEx, Working Capital, and non-cash adjustments, make a smaller impact."
    },
    {
       "Type":"DCF"
      ,"Question":"Should Cost of Equity and WACC be higher for a $5 billion or $500 million Equity Value company?"
      ,"Answer":" Assuming that both companies have the same capital structure percentages, Cost of Equity and WACC should both be higher for the $500 million company. All else being equal, smaller companies tend to offer higher potential returns and higher risk than larger companies, which explains why Cost of Equity will be higher. Since smaller companies have a higher chance of defaulting on their Debt, their Cost of Debt (and Preferred) also tends to be higher. And since all the Costs tend to be higher for smaller companies, WACC must be higher, assuming the same capital structure percentages."
    },
    {
       "Type":"DCF"
      ,"Question":"Would increasing the revenue growth from 9% to 10% or increasing the Discount Rate from 9% to 10% make a bigger impact on a DCF?"
      ,"Answer":" The Discount Rate increase will make a bigger impact. Increasing revenue growth from 9% to 10% will barely impact FCF and Terminal Value, but the Discount Rate will affect the Present Value of everything, and 9% vs. 10% is a significant difference."
    },
    {
       "Type":"DCF"
      ,"Question":"Would it make a bigger impact to increase revenue growth from 9% to 20%, or to increase the Discount Rate from 9% to 10%?"
      ,"Answer":" It’s harder to tell here. Doubling a company’s revenue growth could make a bigger impact than changing the Discount Rate by 1%, but when the changes are this different, you’d have to run the numbers to tell. These operational changes make a bigger impact in longer projection periods than they do in shorter ones, so you would see more of a difference in a 10-year DCF than a 5-year one."
    },
    {
       "Type":"DCF"
      ,"Question":"Two companies produce identical total Free Cash Flows over a 10-year period, but Company A generates 90% of its Free Cash Flow in the first year and 10% over the remaining 9 years. Company B generates the same amount of Free Cash Flow in every year. Which company will have the higher Implied Value in a DCF?"
      ,"Answer":" This is a trick question because it depends on what you count toward the Implied Value. If it’s just this series of cash flows, Company A will have the higher Implied Value because of the time value of money: The cash flows arrive earlier, so they’re worth more. However, Company B will almost certainly have a much higher Terminal Value because it has a much higher FCF in Year 10. So, if you count the PV of Terminal Value in the analysis, it’s a good bet that Company B will have the higher Implied Value."
    },
    {
       "Type":"DCF"
      ,"Question":"How does the tax rate affect the Cost of Equity, Cost of Debt, WACC, and the Implied Value from a DCF?"
      ,"Answer":"The tax rate affects the Cost of Equity, Cost of Debt, and WACC only if the company has Debt. If the company does not have Debt, or its targeted/optimal capital structure does not include Debt, the tax rate doesn’t matter because there’s no tax benefit to interest paid on Debt. If the company has some Debt, a higher tax rate will reduce the Cost of Equity, Cost of Debt, and WACC. It’s easy to see why it reduces the Cost of Debt: Since you multiply by (1 – Tax Rate), a higher rate always reduces the after-tax cost. But it also reduces the Cost of Equity for the same reason: With a greater tax benefit, Debt is less risky even to Equity investors. And if both of these are lower, WACC will also be lower. However, the Implied Value from a DCF will also be lower because the higher tax rate reduces FCF and the company’s Terminal Value. Those changes outweigh a lower WACC. The opposite happens with a lower tax rate: The Cost of Equity, Cost of Debt, and WACC are all higher, and the Implied Value is also higher. Return to Top.Public Comps and Precedent Transactions This section is short because we covered many of these questions in the guide to Equity Value, Enterprise Value, and Valuation Multiples. Public Comps and Precedent Transactions relate to how you use valuation multiples in real life. If you already understand what multiples mean and how to calculate them, you just need to understand the execution to answer these questions."
    },
    {
       "Type":"DCF"
      ,"Question":"Can you walk me through how you use Public Comps and Precedent Transactions in a valuation?"
      ,"Answer":" First, you select the companies and transactions based on criteria such as industry, size, and geography (and time for the transactions). Then, you determine the appropriate metrics and multiples for each set – for example, revenue, revenue growth, EBITDA, EBITDA margins, and revenue and EBITDA multiples – and you calculate them for all the companies and transactions.Next, you calculate the minimum, 25th percentile, median, 75th percentile, and maximum for each valuation multiple in the set. Finally, you apply these numbers to the financial metrics of the company you’re analyzing to estimate its Implied Value. For example, if the company you’re valuing has $100 million in LTM EBITDA, and the median LTM EV / EBITDA multiple in a set of comparable companies is 7x, then the company’s implied Enterprise Value is $700 million. You then calculate its Implied Value for all the other multiples to get a range of possible values."
    },
    {
       "Type":"DCF"
      ,"Question":"Why is it important to select Public Comps and Precedent Transactions that are similar?"
      ,"Answer":" Because the comparable companies and transactions should have similar Discount Rates and Free Cash Flow figures. Remember that a company’s valuation multiples depend on its Free Cash Flow, Discount Rate, and Expected FCF Growth Rate. If the companies in your set all have similar Discount Rates and Free Cash Flows, it’s easier to conclude that one company trades at higher multiples because its expected growth rate is higher. If the companies do not have similar Discount Rates and Free Cash Flows, it’s harder to draw meaningful conclusions."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you select Comparable Companies and Precedent Transactions?"
      ,"Answer":" You screen based on geography, industry, and size, and also time for Precedent Transactions. Here are a few example screens: • Comparable Company Screen: U.S.-based steel manufacturing companies with over $500 million in revenue.• Comparable Company Screen: European legacy airlines with over €1 billion in EBITDA.• Precedent Transaction Screen: Latin American M&A transactions over the past 3 years involving consumer/retail sellers with over $1 billion USD in revenue.• Precedent Transaction Screen: Australian M&A transactions over the past 2 years involving infrastructure sellers with over $200 million AUD in revenue."
    },
    {
       "Type":"DCF"
      ,"Question":"Are there any screens you should AVOID when selecting Comparable Companies and Precedent Transactions?"
      ,"Answer":" You should avoid screening by both financial metrics and Equity Value or Enterprise Value. For example, you should NOT use this screen: “Companies with revenue below $1 billion and Enterprise Values above $2 billion.” If you use that screen, you’re artificially constraining the multiples because EV / Revenue must be above 2x for every company in the set."
    },
    {
       "Type":"DCF"
      ,"Question":"Public Comps and Precedent Transactions seem similar. What are the main differences?"
      ,"Answer":" The idea is similar – you use Current valuation multiples from similar companies or deals to value a company – but the execution is different. Here are the differences for Precedent Transactions: • Screening Criteria: In addition to industry, size, and geography, you also use time because you only want transactions from the past few years. You might also use Transaction Size, and you might use broader screening criteria in general.• Metrics and Multiples: You focus on historical metrics and multiples, especially LTM revenue and EBITDA as of the announcement date.• Calculations: All the multiples are based on the purchase price as of the announcement date of the deal.• Output: The multiples produced tend to be higher than the multiples from Public Comps because of the control premium. But the multiples also tend to span wider ranges because deals can be done for many different reasons."
    },
    {
       "Type":"DCF"
      ,"Question":"Can you walk me through the process of finding market and financial information for the Public Comps?"
      ,"Answer":" You start by finding each company’s most recent annual and interim (quarterly or half-year) filings. You calculate its diluted share count and Current Equity Value and Current Enterprise Value based on the information there and its most recent Balance Sheet. Then, you calculate its Last Twelve Months (LTM) financial metrics by taking the most recent annual results, adding the results from the most recent partial period, and subtracting the results from the same partial period the last year. For the projected figures, you look in equity research or find consensus figures on Bloomberg. And then you calculate all the multiples by dividing Current Equity Value or Current Enterprise Value by the appropriate metric."
    },
    {
       "Type":"DCF"
      ,"Question":"Can you walk me through the process of finding market and financial information for the Precedent Transactions?"
      ,"Answer":" You find the acquired company’s filings from just before the deal was announced, and you calculate the LTM financial metrics using those. To calculate the company’s Transaction Equity Value and Enterprise Value, you use the purchase price the acquirer paid, and you move from Equity Value to Enterprise Value in the same way you usually do, using the company’s most recent Balance Sheet as of the announcement date. You calculate all the valuation multiples in the same way, using Transaction Equity Value or Transaction Enterprise Value as appropriate."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you decide which metrics and multiples to use in these methodologies?"
      ,"Answer":" You usually look at a sales-based metric and its corresponding multiple and 1-2 profitability-based metrics and multiples. For example, you might use Revenue, EBITDA, and Net Income, and the corresponding multiples: EV / Revenue, EV / EBITDA, and P / E. You do this because you want to value a company in relation to how much it sells and to how much it keeps of those sales. Sometimes, you’ll drop the sales-based multiples and focus on profitability or cash flow-based ones (EBIT, EBITDA, Net Income, Free Cash Flow, etc.)."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you look at BOTH historical and projected metrics and multiples in these methodologies?"
      ,"Answer":" Historical metrics are useful because they’re based on what actually happened, but they can also be deceptive if there were non-recurring items or if the company made acquisitions or divestitures. Projected metrics are useful because they assume the company will operate in a “steady state,” without acquisitions, divestitures, or non-recurring items, but they’re also less reliable because they’re based on predictions of the future."
    },
    {
       "Type":"DCF"
      ,"Question":"When you calculate forward multiples for the comparable companies, should you use each company’s Current Equity Value or Current Enterprise Value, or should you project them to get the Year 1 or Year 2 values?"
      ,"Answer":" No, you always use the Current Equity Value or Current Enterprise Value. NEVER “project” either one. A company’s share price, and, therefore, both of these metrics, is based on past performance and future expectations. So, to “project” these metrics, you’d have to jump into the future and see what future expectations are at that point, which doesn’t make sense."
    },
    {
       "Type":"DCF"
      ,"Question":"What should you do if some companies in your set of Public Comps have fiscal years that end on June 30th and others have fiscal years that end on December 31st?"
      ,"Answer":" You have to “calendarize” by adjusting the companies’ fiscal years so that they match up. For example, to make everything match a December 31st year-end date, you take each company with a June 30th fiscal-year end and do the following: • Start with the company’s full June 30th fiscal-year results. • Add the June 30th – December 31st results from this year. • Subtract the June 30th – December 31st results from the previous year. Normally, you calendarize to match the fiscal year of the company you’re valuing."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you interpret the Public Comps? What does it mean if the median multiples are above or below the ones of the company you’re valuing?"
      ,"Answer":" The interpretation depends on how the growth rates and margins of your company compare to those of the comparable companies. Public Comps are most meaningful when the growth rates and margins are similar, but the multiples are different. This could mean that the company you’re valuing is mispriced and that there’s an opportunity to invest and make money. For example, all the companies are growing their revenues at 10-15% and their EBITDAs at 15-20%, and they all have EBITDA margins of 10-15%. Your company also has multiples in these ranges. However, your company trades at EV / EBITDA multiples of 6x to 8x, while the comparable companies all trade at multiples of 10x to 12x. That could indicate that your company is undervalued since its multiples are lower, but its growth rates, margins, industry, and size are all comparable. If the growth rates and margins are very different, it’s harder to draw conclusions."
    },
    {
       "Type":"DCF"
      ,"Question":"Is it valid to include both announced and closed deals in your set of Precedent Transactions?"
      ,"Answer":" Yes, because Precedent Transactions reflect overall market activity. Even if a deal hasn’t closed yet, the simple announcement of the deal reflects what one company believes another is worth. Note that you base all the metrics and multiples on the financial information as of the announcement dates."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do Precedent Transactions often result in more “random” data than Public Comps?"
      ,"Answer":" The problem is that the circumstances surrounding each deal might be very different.For example, one company might have sold itself because it was distressed and about to enter bankruptcy. But another company might have sold itself because the acquirer desperately needed it and was willing to pay a high price. Some deals are competitive and include multiple acquirers bidding against each other, while others are more targeted and do not involve competitive bidding. All these factors mean that the multiples tend to vary widely, more so than the multiples for Public Comps."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you factor in earn-outs and expected synergies in Precedent Transactions?"
      ,"Answer":" You generally don’t factor in expected synergies because they’re so speculative. If you do include them, you might increase the sellers’ projected revenue or EBITDA figures so that the valuation multiples end up being lower. Opinions differ on earn-outs, but you could assume that they have a 50% chance of being paid out, multiply the earn-out amounts by 50%, and add them to the purchase prices. Other people ignore earn-outs or add the full earn-out amounts to the purchase prices."
    },
    {
       "Type":"DCF"
      ,"Question":"Are there any rules about filtering out deals for less than 100% of companies or about stock vs. cash deals in Precedent Transactions?"
      ,"Answer":" Ideally, your set of Precedent Transactions will include only 100% acquisition deals. However, you may need to go beyond that and also include majority-stake deals (ones where the acquirer buys more than 50% but less than 100% of the seller). You can include those because the dynamics are similar, but you should not include minority-stake deals because acquiring 10% or 20% of a company is quite different. Stock vs. cash consideration affects buyers’ willingness to pay in M&A deals, but you typically include all deals regardless of the form of consideration. You may note whether each deal was cash, stock, or a mix of both."
    },
    {
       "Type":"DCF"
      ,"Question":"If there’s a Precedent Transaction where the buyer acquired 80% of the seller, how do you calculate the valuation multiples?"
      ,"Answer":" The multiples are always based on 100% of the seller’s value. So, if the acquirer purchased 80% of the seller for $500 million, the Purchase Equity Value would be $500 million / 80% = $625 million. And then you would calculate the Purchase Enterprise Value based on that figure plus the usual adjustments. You would then calculate the valuation multiples based on those figures and the financial stats for 100% of the seller."
    },
    {
       "Type":"DCF"
      ,"Question":"Why do you use median multiples rather than average multiples or other percentiles?"
      ,"Answer":" Median multiples are better than average multiples because of outliers. If there are 5 companies in your set, and the multiples are 8x, 10x, 9x, 8x, and 25x, you don’t want the 25x multiple to push up the average when it’s clearly an outlier. However, there’s no “rule” that you have to use the median rather than other percentiles, so you could make an argument for using the 25th percentile or 75th percentile. For example, you could argue that your company’s growth rates and margins are in-line with those of companies in the 75th percentile of your set and that the 75th percentile multiples are, therefore, most applicable to your company. Return to Top."
    },
    {
       "Type":"DCF"
      ,"Question":"What is a Liquidation Valuation, and when is it useful and not so useful?"
      ,"Answer":" In a Liquidation Valuation, you value a company by determining the fair market values of all its Assets, adding them up, and subtracting the fair market values of all its Liabilities.It gives you the company’s Implied Equity Value because you’re valuing all the company’s Assets rather than just its core-business Assets. This methodology is useful for distressed companies because it tells you how much they might be worth if they have to liquidate and shut down. It’s less useful for healthy, growing companies because it tends to undervalue them greatly. A growing company is worth a lot more than what’s on its Balance Sheet because of its future growth potential."
    },
    {
       "Type":"DCF"
      ,"Question":"How does a Dividend Discount Model (DDM) differ from a DCF?"
      ,"Answer":" In a DDM, rather than projecting Free Cash Flow, you project the company’s Dividends, usually based on a percentage of Net Income. You then discount the Dividends to their Present Value using the Cost of Equity and add them up. To calculate the Terminal Value, you use an Equity Value-based multiple such as P / E (or the Gordon Growth Method), and then you discount it to its Present Value using the Cost of Equity. You calculate the company’s Implied Equity Value at the end rather than its Implied Enterprise Value, and you divide it by the diluted share count to get the company’s Implied Share Price. The DDM is essential in some industries, such as commercial banks and insurance, useful for other industries that pay regular dividends, such as REITs, utilities, and some MLPs, and not so useful for most others."
    },
    {
       "Type":"DCF"
      ,"Question":"Why might you use an M&A Premiums analysis to value a company?"
      ,"Answer":" The M&A Premiums analysis applies only to public companies because you look at acquisitions of similar public companies and calculate the “premium” each buyer paid for each seller. For example, if the seller’s share price was $12.00 before the deal, and the buyer paid $15.00 per share, that represents a 25% premium. You take the median for a set of transactions and then use that percentage to value your company. If the median premium is 20%, and your company’s share price is $10.00, it’s worth $12.00 per share. This analysis is useful when Precedent Transactions give nonsensical results, and you want to use something other than traditional multiples to value your company.For example, if the Precedent Transactions were all done at EV / EBITDA multiples between 6x and 8x, and your company is currently at trading at 10x EV / EBITDA, the results don’t make sense: A public company can’t sell for less than its current multiples. So, you could look at the M&A premiums instead. If the median premium is 25%, you might apply that to your company’s share price and say that a buyer might have to pay that much to do the deal."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you build a Future Share Price Analysis?"
      ,"Answer":" You take the median historical multiple from the Public Comps, often the P / E multiple, and apply it to the future metric of the company you’re valuing (Net Income or EPS with the P / E multiple). You assume that in 1-2 years, the company will be trading at the median multiple the comparable companies are currently trading at. For example, if the median P / E is 15x, and the company’s Year 1 projected EPS is $1.00, you could say the company’s expected “future share price” is 15 * $1.00 = $15.00. Then, you discount this future share price to its Present Value by using a range of values for the company’s Cost of Equity. For Enterprise Value-based multiples, you back into the Implied Equity Value and Implied Share Price in future years and then discount that share price to its Present Value."
    },
    {
       "Type":"DCF"
      ,"Question":"What are the advantages and disadvantages of a Sum-of-the-Parts Valuation?"
      ,"Answer":" The Sum-of-the-Parts methodology, where you value each division of a company separately and add them up to determine the company’s Implied Value, works well for conglomerates like General Electric that have very different divisions. The divisions operate in such different industries that it would be meaningless to value the company as a whole – no other company would be truly comparable. But Sum of the Parts also takes far more time and effort to set up because you have to find comparable companies and transactions for each division, build a separate DCF for each division, and so on.Also, you may not have enough information to use it – companies sometimes don’t disclose EBIT or CapEx by division, and they may not disclose the corporate overhead expenses that you must factor in at the end of the analysis."
    },
    {
       "Type":"DCF"
      ,"Question":"How do you set up an LBO valuation, and when is it useful?"
      ,"Answer":" You set up the LBO valuation by creating a leveraged buyout model where a private equity firm acquires a company using Debt and Equity, holds it for several years, and then sells it for a certain multiple of EBITDA. Since most private equity firms target an internal rate of return (IRR) in a specific range, you work backward and determine the maximum purchase price the PE firm can pay to achieve a minimum IRR. You use the “Goal Seek” function in Excel to do this, and you solve for the purchase price based on constraints for the IRR, exit multiple, and Debt / Equity split. This methodology is useful for setting a floor on the company’s valuation – you’re constraining the price because of the IRR requirement. It’s also useful for estimating what a private equity firm, rather than a normal company, might be willing to pay for a company."
    }]