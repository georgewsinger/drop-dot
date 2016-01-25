goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__272088__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__272088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272089__i = 0, G__272089__a = new Array(arguments.length -  0);
while (G__272089__i < G__272089__a.length) {G__272089__a[G__272089__i] = arguments[G__272089__i + 0]; ++G__272089__i;}
  args = new cljs.core.IndexedSeq(G__272089__a,0);
} 
return G__272088__delegate.call(this,args);};
G__272088.cljs$lang$maxFixedArity = 0;
G__272088.cljs$lang$applyTo = (function (arglist__272090){
var args = cljs.core.seq(arglist__272090);
return G__272088__delegate(args);
});
G__272088.cljs$core$IFn$_invoke$arity$variadic = G__272088__delegate;
return G__272088;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__272091__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__272091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272092__i = 0, G__272092__a = new Array(arguments.length -  0);
while (G__272092__i < G__272092__a.length) {G__272092__a[G__272092__i] = arguments[G__272092__i + 0]; ++G__272092__i;}
  args = new cljs.core.IndexedSeq(G__272092__a,0);
} 
return G__272091__delegate.call(this,args);};
G__272091.cljs$lang$maxFixedArity = 0;
G__272091.cljs$lang$applyTo = (function (arglist__272093){
var args = cljs.core.seq(arglist__272093);
return G__272091__delegate(args);
});
G__272091.cljs$core$IFn$_invoke$arity$variadic = G__272091__delegate;
return G__272091;
})()
;

return null;
});
