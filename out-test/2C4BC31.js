goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10088__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10089__i = 0, G__10089__a = new Array(arguments.length -  0);
while (G__10089__i < G__10089__a.length) {G__10089__a[G__10089__i] = arguments[G__10089__i + 0]; ++G__10089__i;}
  args = new cljs.core.IndexedSeq(G__10089__a,0);
} 
return G__10088__delegate.call(this,args);};
G__10088.cljs$lang$maxFixedArity = 0;
G__10088.cljs$lang$applyTo = (function (arglist__10090){
var args = cljs.core.seq(arglist__10090);
return G__10088__delegate(args);
});
G__10088.cljs$core$IFn$_invoke$arity$variadic = G__10088__delegate;
return G__10088;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10091__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10092__i = 0, G__10092__a = new Array(arguments.length -  0);
while (G__10092__i < G__10092__a.length) {G__10092__a[G__10092__i] = arguments[G__10092__i + 0]; ++G__10092__i;}
  args = new cljs.core.IndexedSeq(G__10092__a,0);
} 
return G__10091__delegate.call(this,args);};
G__10091.cljs$lang$maxFixedArity = 0;
G__10091.cljs$lang$applyTo = (function (arglist__10093){
var args = cljs.core.seq(arglist__10093);
return G__10091__delegate(args);
});
G__10091.cljs$core$IFn$_invoke$arity$variadic = G__10091__delegate;
return G__10091;
})()
;

return null;
});
