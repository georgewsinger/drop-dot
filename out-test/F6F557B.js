goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12903__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12904__i = 0, G__12904__a = new Array(arguments.length -  0);
while (G__12904__i < G__12904__a.length) {G__12904__a[G__12904__i] = arguments[G__12904__i + 0]; ++G__12904__i;}
  args = new cljs.core.IndexedSeq(G__12904__a,0);
} 
return G__12903__delegate.call(this,args);};
G__12903.cljs$lang$maxFixedArity = 0;
G__12903.cljs$lang$applyTo = (function (arglist__12905){
var args = cljs.core.seq(arglist__12905);
return G__12903__delegate(args);
});
G__12903.cljs$core$IFn$_invoke$arity$variadic = G__12903__delegate;
return G__12903;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12906__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12907__i = 0, G__12907__a = new Array(arguments.length -  0);
while (G__12907__i < G__12907__a.length) {G__12907__a[G__12907__i] = arguments[G__12907__i + 0]; ++G__12907__i;}
  args = new cljs.core.IndexedSeq(G__12907__a,0);
} 
return G__12906__delegate.call(this,args);};
G__12906.cljs$lang$maxFixedArity = 0;
G__12906.cljs$lang$applyTo = (function (arglist__12908){
var args = cljs.core.seq(arglist__12908);
return G__12906__delegate(args);
});
G__12906.cljs$core$IFn$_invoke$arity$variadic = G__12906__delegate;
return G__12906;
})()
;

return null;
});
