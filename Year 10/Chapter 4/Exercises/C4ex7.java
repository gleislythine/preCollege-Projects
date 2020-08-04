import java.util.Scanner;

public class C4ex7 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a three-digit number: ");
    		int number = input.nextInt();
    	input.close();
    	
    	int hundreds = number / 100;
    	int tens = (number / 10) % 10;
    	int ones = number % 10;
    	System.out.println("The hundreds-place digit is: " + hundreds);
    	System.out.println("The tens-place digit is: " + tens);
    	System.out.println("The ones-place digit is: " + ones);
    }
}