import java.util.Scanner;

public class C4ex6 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the change in cents: ");
    		int cents = input.nextInt();
    	input.close();
    	
        int quarters = cents / 25;
        	cents = cents % 25;
        int dimes = cents / 10;
        	cents = cents % 10;
        int nickels = cents / 5;
        	cents %= 5;
        int pennies = cents;
    	
    	System.out.println("The minimum number of coins is:");
    	System.out.println("\t\tQuarters: " + quarters);
    	System.out.println("\t\tDimes: "    + dimes);
    	System.out.println("\t\tNickels: "  + nickels);
    	System.out.println("\t\tPennies: "  + pennies);
    }
}