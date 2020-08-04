import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex14 {
    public static void main(String [] Args) {
    	
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    	             decimal.setMinimumFractionDigits(1);
    	             
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the number of gallons: ");
    			int gallons = input.nextInt();
    	input.close();
    	
    	int toQuarts = gallons  * 4;
    	int toPints  = toQuarts * 2;
    	int toCups   = toPints  * 2;
    	int toTbsps  = toCups   * 16;
    	System.out.println("In "  + decimal.format(gallons) + " gallons there are:");
    	System.out.print(decimal.format(toQuarts) + " quarts\n");
    	System.out.print(decimal.format(toPints)  + " pints\n");
    	System.out.print(decimal.format(toCups)   + " cups\n");
    	System.out.print(decimal.format(toTbsps)  + " tablespoons\n");
    }
}