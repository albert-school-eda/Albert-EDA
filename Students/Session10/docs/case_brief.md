# Subscription customer revenue: source brief

Synthetic teaching data, matching the S10 slides. A subscription service wants to compare annual revenue by acquisition channel before allocating a retention budget.

Grain: one customer snapshot for the same12-month period. Amounts are net invoiced euros after returns. Blank revenue is unknown, not zero. Identifiers and postcodes are text. UTF-8 CSV files use commas and decimal points.

The raw export includes repeated records. `source_evidence.csv` contains evidence available from the business and collection process. `identity_candidates.csv` contains a candidate pair for review, not a confirmed match. Do not infer identity from a name or postcode alone.

Scenario A replaces missing revenue with the global median of observed revenue in a working view of exact distinct snapshots. Scenario B assigns EUR600 to each missing Legacy revenue as a stress assumption. Neither scenario supplies the true missing values. Preserve the original file and distinguish observed from assumed revenue.

Individual work35 minutes. AI is allowed. The notebook supplies all analysis code. Your work is to justify four quality decisions and write a defensible recommendation. Do not treat a passing check as proof of representativeness or causal impact.
