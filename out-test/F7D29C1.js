goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154704__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154705__i = 0, G__154705__a = new Array(arguments.length -  0);
while (G__154705__i < G__154705__a.length) {G__154705__a[G__154705__i] = arguments[G__154705__i + 0]; ++G__154705__i;}
  args = new cljs.core.IndexedSeq(G__154705__a,0);
} 
return G__154704__delegate.call(this,args);};
G__154704.cljs$lang$maxFixedArity = 0;
G__154704.cljs$lang$applyTo = (function (arglist__154706){
var args = cljs.core.seq(arglist__154706);
return G__154704__delegate(args);
});
G__154704.cljs$core$IFn$_invoke$arity$variadic = G__154704__delegate;
return G__154704;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154707__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154708__i = 0, G__154708__a = new Array(arguments.length -  0);
while (G__154708__i < G__154708__a.length) {G__154708__a[G__154708__i] = arguments[G__154708__i + 0]; ++G__154708__i;}
  args = new cljs.core.IndexedSeq(G__154708__a,0);
} 
return G__154707__delegate.call(this,args);};
G__154707.cljs$lang$maxFixedArity = 0;
G__154707.cljs$lang$applyTo = (function (arglist__154709){
var args = cljs.core.seq(arglist__154709);
return G__154707__delegate(args);
});
G__154707.cljs$core$IFn$_invoke$arity$variadic = G__154707__delegate;
return G__154707;
})()
;

return null;
});
