# Claims export: business definitions

Synthetic teaching data. Snapshot: 2026-09-10. The intended grain is **one claim per row**. The claims director wants a defensible preliminary **mean claimed amount** for reserve planning and a list of records that require source verification. Preserve the export as received; any proposed analytical view must be reproducible.

| Field | Business meaning | Expected role / domain |
|---|---|---|
| `claim_id` | Claim reference | Identifier; one distinct ID per claim at this grain |
| `postal_code` | Postal code supplied for the claim | Five-character geographic code, including leading zeros; not a quantity |
| `claimant_age` | Claimant's age at snapshot | Integer, 18–100 under the current portfolio rule |
| `claim_type` | Type of claim | Category: `Home`, `Auto`, `Travel`, `Health` |
| `claim_amount_eur` | Amount requested on the claim | Nonnegative euro amount; large claims may be valid |
| `processing_days` | Days elapsed to the snapshot | Nonnegative count |
| `settlement_ratio` | Amount settled / eligible amount | Ratio from 0 to 1; numerator and denominator need confirmation if disputed |

`student_claims_source_notes.csv` contains selective external evidence. Its absence for a claim says nothing about that claim's validity. There are no intended missing values in this exercise. Flag anomalies, quantify their possible effect, and document decisions without overwriting the raw export. Formal missingness and duplicate mechanisms are covered in S10; cleaning and imputation decisions are covered in S11.
