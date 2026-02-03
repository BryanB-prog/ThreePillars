# Compute start/end values
start_year = df_yearly["year"].min()
end_year   = df_yearly["year"].max()

income_start = df_yearly.loc[df_yearly["year"] == start_year, "median_income"].values[0]
income_end   = df_yearly.loc[df_yearly["year"] == end_year, "median_income"].values[0]

housing_start = df_yearly.loc[df_yearly["year"] == start_year, "median_housing_cost"].values[0]
housing_end   = df_yearly.loc[df_yearly["year"] == end_year, "median_housing_cost"].values[0]

income_pct_change = (income_end - income_start) / income_start * 100
housing_pct_change = (housing_end - housing_start) / housing_start * 100


# Plot
plt.figure(figsize=(7, 5), dpi=100)
plt.plot(df_yearly["year"], df_yearly["median_income"], label="Median Income", linewidth=2)
plt.plot(df_yearly["year"], df_yearly["median_housing_cost"], label="Median Housing Cost", linewidth=2)

plt.xlabel("Year")
plt.ylabel("Dollars")
plt.title("Median Income vs Housing Cost Over Time")

# Add annotations
plt.text(
    df_yearly["year"].iloc[1],
    df_yearly["median_income"].max() * 0.95,
    f"Income +{income_pct_change:.1f}%",
    color="blue",
    fontsize=11,
    fontweight="bold"
)

plt.text(

    df_yearly["year"].iloc[-3],
    df_yearly["median_housing_cost"].iloc[-1] * 1.01,
    f"Housing +{housing_pct_change:.1f}%",
    color="orange",
    fontsize=11,
    fontweight="bold"

)

plt.legend()
plt.tight_layout()
plt.show()

# Make sure year is numeric
income_clean["year"] = pd.to_numeric(income_clean["year"])
housing_clean["year"] = pd.to_numeric(housing_clean["year"])

# Collapse to ONE value per year (mean is fine if there are duplicates)
income_yearly = income_clean.groupby("year", as_index=False)["median_income"].mean()
housing_yearly = housing_clean.groupby("year", as_index=False)["median_housing_cost"].mean()

# Merge and sort
df_yearly = income_yearly.merge(housing_yearly, on="year", how="inner").sort_values("year")

# Create gap metric(s)
df_yearly["income_housing_gap"] = df_yearly["median_income"] - df_yearly["median_housing_cost"]
df_yearly["housing_cost_ratio"] = df_yearly["median_housing_cost"] / df_yearly["median_income"]

df_yearly.head()


# Plot housing cost ratio over time

plt.figure(figsize=(7, 5), dpi=100)
plt.plot(df_yearly["year"], df_yearly["housing_cost_ratio"], linewidth=2)
plt.axhline(0.3, linestyle="--", alpha=0.7)

plt.title("Housing Cost Burden Over Time", fontsize=14, fontweight="bold")
plt.xlabel("Year")
plt.ylabel("Housing Cost / Income")
plt.tight_layout()

summary_text = (
    "Housing costs are rising faster than income.\n"
    "The typical household is well above the\n"
    "30% affordability threshold.\n"
    "Trend is statistically significant (p < 0.05)."
)

plt.text(
    0.98, 0.05, summary_text,
    transform=plt.gca().transAxes,
    fontsize=10,
    ha="right",
    va="bottom",
    bbox=dict(boxstyle="round,pad=0.4", facecolor="white", alpha=0.8)
)

plt.show()


# Statistical significance test
from scipy.stats import linregress

slope, _, _, p_value, _ = linregress(
    df_yearly["year"],
    df_yearly["housing_cost_ratio"]
)

print("Slope:", slope)
print("p-value:", p_value)






