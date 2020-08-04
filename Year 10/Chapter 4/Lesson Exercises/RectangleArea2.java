import java.util.Scanner;

public class RectangleArea2 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the length: ");
    		int length = input.nextInt();
    		
    		System.out.print("Enter the width: ");
    		int width = input.nextInt();
    	input.close();
    	
    	int area = length * width;
    	System.out.println("Area of rectangele: " + area);
    }
}