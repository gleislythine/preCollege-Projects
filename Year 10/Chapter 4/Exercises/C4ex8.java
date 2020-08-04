import java.util.Scanner;

public class C4ex8 {
    public static void main(String [] Args) {
    	Scanner input   = new Scanner(System.in);
    		System.out.print("Enter an integer: ");
    		int number1 = input.nextInt();
    		System.out.print("Enter a second integer: ");
    		int number2 = input.nextInt();
    	input.close();
    	
    	System.out.println("\n" + number1 + " / " + number2 + " = " + (number1 / number2));
    	System.out.println(       number1 + " % " + number2 + " = " + (number1 % number2));
    	System.out.println("\n" + number2 + " / " + number1 + " = " + (number2 / number1));
    	System.out.println(       number2 + " % " + number1 + " = " + (number2 % number1));
    }
}