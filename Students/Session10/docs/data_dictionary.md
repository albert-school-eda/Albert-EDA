# Data dictionary

|Field|Meaning|
|---|---|
|customer_id|CRM identifier; expected unique in the final annual snapshot|
|acquisition_channel|Digital or Legacy|
|annual_revenue_eur|Observed net annual invoiced revenue; blanks mean unknown|
|customer_name|Recorded name; similarity does not establish identity|
|postcode|Recorded postcode as text; shared values do not establish identity|
|source_batch|Provenance of the exported annual snapshot|

Additional source files are evidence, rather than extra customer observations. Never concatenate them with the customer table.
