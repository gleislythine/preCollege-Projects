public class C3ex11 {
    public static void main(String [] Args) {
    	System.out.format("%8s %8s %15s", "Decimal", "Binary", "Hexadecimal");
    	for(int i = 1; i <= 20; i++) {
    		System.out.format("%n %7s %8s %15s", i, 
    						  Integer.toBinaryString(i),
    						  "0x" + Integer.toHexString(i).toUpperCase()
    						 );
    	}
    }
}