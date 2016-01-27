goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__298887__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__298887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298888__i = 0, G__298888__a = new Array(arguments.length -  0);
while (G__298888__i < G__298888__a.length) {G__298888__a[G__298888__i] = arguments[G__298888__i + 0]; ++G__298888__i;}
  args = new cljs.core.IndexedSeq(G__298888__a,0);
} 
return G__298887__delegate.call(this,args);};
G__298887.cljs$lang$maxFixedArity = 0;
G__298887.cljs$lang$applyTo = (function (arglist__298889){
var args = cljs.core.seq(arglist__298889);
return G__298887__delegate(args);
});
G__298887.cljs$core$IFn$_invoke$arity$variadic = G__298887__delegate;
return G__298887;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__298890__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__298890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298891__i = 0, G__298891__a = new Array(arguments.length -  0);
while (G__298891__i < G__298891__a.length) {G__298891__a[G__298891__i] = arguments[G__298891__i + 0]; ++G__298891__i;}
  args = new cljs.core.IndexedSeq(G__298891__a,0);
} 
return G__298890__delegate.call(this,args);};
G__298890.cljs$lang$maxFixedArity = 0;
G__298890.cljs$lang$applyTo = (function (arglist__298892){
var args = cljs.core.seq(arglist__298892);
return G__298890__delegate(args);
});
G__298890.cljs$core$IFn$_invoke$arity$variadic = G__298890__delegate;
return G__298890;
})()
;

return null;
});
