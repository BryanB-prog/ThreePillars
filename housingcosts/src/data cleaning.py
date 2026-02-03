# Clean income data
income_clean = income_df[
    (income_df["Statistics"] == "Median income") &
    (income_df["GEO"] == "Canada") &
    (income_df["Sex"] == "Both sexes")
][["REF_DATE", "VALUE"]]

income_clean = income_clean.rename(columns={
    "REF_DATE": "year",
    "VALUE": "median_income"
})

income_clean["median_income"] = pd.to_numeric(income_clean["median_income"])


# Clean housing (shelter cost) data
housing_clean = housing_df[
    (housing_df["Household expenditures, summary-level categories"] == "Shelter") &
    (housing_df["GEO"] == "Canada") &
    (housing_df["Household type"] == "All classes")
][["REF_DATE", "VALUE"]]

housing_clean = housing_clean.rename(columns={
    "REF_DATE": "year",
    "VALUE": "median_housing_cost"
})

housing_clean["median_housing_cost"] = pd.to_numeric(housing_clean["median_housing_cost"])


# Merge into final dataframe
df = income_clean.merge(
    housing_clean,
    on="year",
    how="inner"
)

income_yearly = income_clean.groupby("year", as_index=False)["median_income"].mean()
housing_yearly = housing_clean.groupby("year", as_index=False)["median_housing_cost"].mean()

df_yearly = income_yearly.merge(housing_yearly, on="year", how="inner").sort_values("year")


df.head()
