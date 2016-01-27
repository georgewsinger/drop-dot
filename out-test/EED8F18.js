goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51652__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51653__i = 0, G__51653__a = new Array(arguments.length -  0);
while (G__51653__i < G__51653__a.length) {G__51653__a[G__51653__i] = arguments[G__51653__i + 0]; ++G__51653__i;}
  args = new cljs.core.IndexedSeq(G__51653__a,0);
} 
return G__51652__delegate.call(this,args);};
G__51652.cljs$lang$maxFixedArity = 0;
G__51652.cljs$lang$applyTo = (function (arglist__51654){
var args = cljs.core.seq(arglist__51654);
return G__51652__delegate(args);
});
G__51652.cljs$core$IFn$_invoke$arity$variadic = G__51652__delegate;
return G__51652;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51655__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51656__i = 0, G__51656__a = new Array(arguments.length -  0);
while (G__51656__i < G__51656__a.length) {G__51656__a[G__51656__i] = arguments[G__51656__i + 0]; ++G__51656__i;}
  args = new cljs.core.IndexedSeq(G__51656__a,0);
} 
return G__51655__delegate.call(this,args);};
G__51655.cljs$lang$maxFixedArity = 0;
G__51655.cljs$lang$applyTo = (function (arglist__51657){
var args = cljs.core.seq(arglist__51657);
return G__51655__delegate(args);
});
G__51655.cljs$core$IFn$_invoke$arity$variadic = G__51655__delegate;
return G__51655;
})()
;

return null;
});
