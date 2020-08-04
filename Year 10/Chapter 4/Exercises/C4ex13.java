import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex13 {
    public static void main(String [] Args) {
    	
    	NumberFormat percent = NumberFormat.getPercentInstance();
    	             percent.setMinimumFractionDigits(2);
    	             
    	Scanner input = new Scanner(System.in);
    		System.out.println("Enter the amount spent last month on the following items:");
    			System.out.print("Food: $");
    				int food          = input.nextInt();
    			System.out.print("Clothing: $");
    				int clothing      = input.nextInt();
    			System.out.print("Entertainment: $");
    				int entertainment = input.nextInt();
    			System.out.print("Rent: $");
    				int rent          = input.nextInt();
    	input.close();
    	
    	double total                 = food + clothing + entertainment + rent;
    	double foodPercent           = food          / total;
    	double clothingPercent       = clothing      / total;
    	double entertainmentPercent  = entertainment / total;
    	double rentPercent           = rent          / total;
    	
    	System.out.format("%-15s %-1s", "\nCategory",      "Budget");
    	System.out.format("%-15s %-1s", "\nFood", percent.format(foodPercent));
    	System.out.format("%-15s %-1s", "\nClothing",    percent.format(clothingPercent));
    	System.out.format("%-15s %-1s", "\nEntertainment", percent.format(entertainmentPercent));
    	System.out.format("%-15s %-1s", "\nRent",   percent.format(rentPercent));
    }
}