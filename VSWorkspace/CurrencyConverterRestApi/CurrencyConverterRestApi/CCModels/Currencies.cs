using System;
using System.Collections.Generic;

namespace CurrencyConverterRestApi.CCModels
{
    public partial class Currencies
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public double ConversionRate { get; set; }
    }
}
