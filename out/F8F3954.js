goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20273__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20274__i = 0, G__20274__a = new Array(arguments.length -  0);
while (G__20274__i < G__20274__a.length) {G__20274__a[G__20274__i] = arguments[G__20274__i + 0]; ++G__20274__i;}
  args = new cljs.core.IndexedSeq(G__20274__a,0);
} 
return G__20273__delegate.call(this,args);};
G__20273.cljs$lang$maxFixedArity = 0;
G__20273.cljs$lang$applyTo = (function (arglist__20275){
var args = cljs.core.seq(arglist__20275);
return G__20273__delegate(args);
});
G__20273.cljs$core$IFn$_invoke$arity$variadic = G__20273__delegate;
return G__20273;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20276__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20277__i = 0, G__20277__a = new Array(arguments.length -  0);
while (G__20277__i < G__20277__a.length) {G__20277__a[G__20277__i] = arguments[G__20277__i + 0]; ++G__20277__i;}
  args = new cljs.core.IndexedSeq(G__20277__a,0);
} 
return G__20276__delegate.call(this,args);};
G__20276.cljs$lang$maxFixedArity = 0;
G__20276.cljs$lang$applyTo = (function (arglist__20278){
var args = cljs.core.seq(arglist__20278);
return G__20276__delegate(args);
});
G__20276.cljs$core$IFn$_invoke$arity$variadic = G__20276__delegate;
return G__20276;
})()
;

return null;
});
