goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__265147__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__265147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265148__i = 0, G__265148__a = new Array(arguments.length -  0);
while (G__265148__i < G__265148__a.length) {G__265148__a[G__265148__i] = arguments[G__265148__i + 0]; ++G__265148__i;}
  args = new cljs.core.IndexedSeq(G__265148__a,0);
} 
return G__265147__delegate.call(this,args);};
G__265147.cljs$lang$maxFixedArity = 0;
G__265147.cljs$lang$applyTo = (function (arglist__265149){
var args = cljs.core.seq(arglist__265149);
return G__265147__delegate(args);
});
G__265147.cljs$core$IFn$_invoke$arity$variadic = G__265147__delegate;
return G__265147;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__265150__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__265150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265151__i = 0, G__265151__a = new Array(arguments.length -  0);
while (G__265151__i < G__265151__a.length) {G__265151__a[G__265151__i] = arguments[G__265151__i + 0]; ++G__265151__i;}
  args = new cljs.core.IndexedSeq(G__265151__a,0);
} 
return G__265150__delegate.call(this,args);};
G__265150.cljs$lang$maxFixedArity = 0;
G__265150.cljs$lang$applyTo = (function (arglist__265152){
var args = cljs.core.seq(arglist__265152);
return G__265150__delegate(args);
});
G__265150.cljs$core$IFn$_invoke$arity$variadic = G__265150__delegate;
return G__265150;
})()
;

return null;
});
