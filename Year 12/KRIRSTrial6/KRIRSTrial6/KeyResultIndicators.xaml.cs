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
    /// Interaction logic for KeyResultIndicators.xaml
    /// </summary>
    public partial class KeyResultIndicators : Window
    {
        ViolationsPageDataContext dc = new ViolationsPageDataContext(Properties.Settings.Default.KRIRSTrial1ConnectionString);

        public KeyResultIndicators()
        {
            InitializeComponent();
        }

        private void btnBackG12STEMA(object sender, RoutedEventArgs e)
        {
            new g12initiative().Show();
        }

        private void DateEnd_CalendarClosed(object sender, RoutedEventArgs e)
        {
            KRIComputator();
        }

        private void KRIComputator()
        {
            

            DateTime? dateStart = DateStart.SelectedDate;
            //MessageBox.Show("|||||" + dateStart.ToString() + "00000");
            DateTime? dateEnd = DateEnd.SelectedDate;
            //MessageBox.Show(dateStart.ToString());

            if ((dateStart == null || dateEnd == null) || (dateStart >= dateEnd))
            {
                MessageBox.Show("End date should be a day after the start date. \n Start date = " + DateStart.SelectedDate + "End date = " + DateEnd.SelectedDate);
            }
            else
            {
                tbKRI.Text = "This is the KRI computation between " + String.Format("{0:dd MMMM yyyy}", dateStart) + " and " + String.Format("{0:dd MMMM yyyy}", dateEnd) + " is: " + dc.udfCompKRI(dateStart, dateEnd);
            }
        }
    }
}
