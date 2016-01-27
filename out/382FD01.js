goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__359891__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__359891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__359892__i = 0, G__359892__a = new Array(arguments.length -  0);
while (G__359892__i < G__359892__a.length) {G__359892__a[G__359892__i] = arguments[G__359892__i + 0]; ++G__359892__i;}
  args = new cljs.core.IndexedSeq(G__359892__a,0);
} 
return G__359891__delegate.call(this,args);};
G__359891.cljs$lang$maxFixedArity = 0;
G__359891.cljs$lang$applyTo = (function (arglist__359893){
var args = cljs.core.seq(arglist__359893);
return G__359891__delegate(args);
});
G__359891.cljs$core$IFn$_invoke$arity$variadic = G__359891__delegate;
return G__359891;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__359894__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__359894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__359895__i = 0, G__359895__a = new Array(arguments.length -  0);
while (G__359895__i < G__359895__a.length) {G__359895__a[G__359895__i] = arguments[G__359895__i + 0]; ++G__359895__i;}
  args = new cljs.core.IndexedSeq(G__359895__a,0);
} 
return G__359894__delegate.call(this,args);};
G__359894.cljs$lang$maxFixedArity = 0;
G__359894.cljs$lang$applyTo = (function (arglist__359896){
var args = cljs.core.seq(arglist__359896);
return G__359894__delegate(args);
});
G__359894.cljs$core$IFn$_invoke$arity$variadic = G__359894__delegate;
return G__359894;
})()
;

return null;
});
