namespace CurrencyConverter.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using CurrencyConverter.Pocos;

    internal sealed class Configuration : DbMigrationsConfiguration<CurrencyConverter.Model1>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CurrencyConverter.Model1 context)
        {
            //  This method will be called after migrating to the latest version.

            /*context.currencies.AddOrUpdate(x => x.Id,
                new Currency() { name = "US Dollar", symbol = "USD", conversionRate=1.2034},
                new Currency() { name = "Japanese Yen", symbol = "JPY", conversionRate = 129.23 },
                new Currency() { name = "Bulgarian Lev", symbol = "BGN", conversionRate = 1.9558 },
                new Currency() { name = "Czech Koruna", symbol = "CZK", conversionRate = 26.208 },
                new Currency() { name = "Danish Krone", symbol = "DKK", conversionRate = 7.4361 },
                new Currency() { name = "Pound Sterling", symbol = "GBP", conversionRate = 0.8627 },
                new Currency() { name = "Hungarian Forint", symbol = "HUF", conversionRate = 364.53 },
                new Currency() { name = "Polish Zloty", symbol = "PLN", conversionRate = 4.5529 },
                new Currency() { name = "Romanian Leu", symbol = "RON", conversionRate = 4.8813 },
                new Currency() { name = "Swedish Koruna", symbol = "SEK", conversionRate = 10.1595 },
                new Currency() { name = "Swiss Franc", symbol = "CHF", conversionRate = 1.114 },
                new Currency() { name = "Icelandic Koruna", symbol = "ISK", conversionRate = 153.30 },
                new Currency() { name = "Norwegian Krone", symbol = "NOK", conversionRate = 10.2595 },
                new Currency() { name = "Croatian Kuna", symbol = "HRK", conversionRate = 7.5870 },
                new Currency() { name = "Russian Rouble", symbol = "RUB", conversionRate = 88.6563 },
                new Currency() { name = "Turkish Lira", symbol = "TRY", conversionRate = 8.9666 },
                new Currency() { name = "Australian Dollar", symbol = "AUD", conversionRate = 1.5449 },
                new Currency() { name = "Brazilian Real", symbol = "BRL", conversionRate = 6.7469 },
                new Currency() { name = "Canadian Dollar", symbol = "CAD", conversionRate = 1.5213 },
                new Currency() { name = "Chinese Yuan Renminbi", symbol = "CNY", conversionRate = 7.7846 },
                new Currency() { name = "Hong Kong Dollar", symbol = "HKD", conversionRate = 9.3363 },
                new Currency() { name = "Indonesian Rupiah", symbol = "IDR", conversionRate = 17166.50 },
                new Currency() { name = "Israeli Shekel", symbol = "ILS", conversionRate = 3.983 },
                new Currency() { name = "Indian Rupee", symbol = "INR", conversionRate = 87.5520 },
                new Currency() { name = "South Korean Won", symbol = "KRW", conversionRate = 1353.89 },
                new Currency() { name = "Mexican Peso", symbol = "MXN", conversionRate = 25.0615 },
                new Currency() { name = "Malaysian Ringgit", symbol = "MYR", conversionRate = 4.8828 },
                new Currency() { name = "New Zealand Dollar", symbol = "NZD", conversionRate = 1.6599 },
                new Currency() { name = "Philippine Peso", symbol = "PHP", conversionRate = 58.399 },
                new Currency() { name = "Singapore Dollar", symbol = "SGD", conversionRate = 1.6024 },
                new Currency() { name = "Thai Baht", symbol = "THB", conversionRate = 36.511},
                new Currency() { name = "South African Rand", symbol = "ZAR", conversionRate = 18.0926 }
                );*/
        }
    }
}
