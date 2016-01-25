goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12777__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12778__i = 0, G__12778__a = new Array(arguments.length -  0);
while (G__12778__i < G__12778__a.length) {G__12778__a[G__12778__i] = arguments[G__12778__i + 0]; ++G__12778__i;}
  args = new cljs.core.IndexedSeq(G__12778__a,0);
} 
return G__12777__delegate.call(this,args);};
G__12777.cljs$lang$maxFixedArity = 0;
G__12777.cljs$lang$applyTo = (function (arglist__12779){
var args = cljs.core.seq(arglist__12779);
return G__12777__delegate(args);
});
G__12777.cljs$core$IFn$_invoke$arity$variadic = G__12777__delegate;
return G__12777;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12780__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12781__i = 0, G__12781__a = new Array(arguments.length -  0);
while (G__12781__i < G__12781__a.length) {G__12781__a[G__12781__i] = arguments[G__12781__i + 0]; ++G__12781__i;}
  args = new cljs.core.IndexedSeq(G__12781__a,0);
} 
return G__12780__delegate.call(this,args);};
G__12780.cljs$lang$maxFixedArity = 0;
G__12780.cljs$lang$applyTo = (function (arglist__12782){
var args = cljs.core.seq(arglist__12782);
return G__12780__delegate(args);
});
G__12780.cljs$core$IFn$_invoke$arity$variadic = G__12780__delegate;
return G__12780;
})()
;

return null;
});
