/**
 * Sarmiento, Chyna Ezra S.
 * March 2019
 * Key Result Indicators Report Software
 * High School Thesis
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace KRIRSTrial6
{
    /// <summary>
    /// Interaction logic for Grade12.xaml
    /// </summary>
    
    public partial class Grade12 : Window
    {

        SQLConnection connDB = new SQLConnection();
        public Grade12()
        {
            InitializeComponent();
        }

        private void btn12STEMa(object sender, RoutedEventArgs e)
        {
            new g12initiative().Show();
        }

        private void btn12STEMb(object sender, RoutedEventArgs e)
        {
            new g12grit().Show();
        }

        private void btnBackSHS(object sender, RoutedEventArgs e)
        {
            new SeniorHighSchoolDepartment().Show();
        }
    }
}
