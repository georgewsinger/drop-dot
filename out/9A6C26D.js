goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__270968__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__270968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270969__i = 0, G__270969__a = new Array(arguments.length -  0);
while (G__270969__i < G__270969__a.length) {G__270969__a[G__270969__i] = arguments[G__270969__i + 0]; ++G__270969__i;}
  args = new cljs.core.IndexedSeq(G__270969__a,0);
} 
return G__270968__delegate.call(this,args);};
G__270968.cljs$lang$maxFixedArity = 0;
G__270968.cljs$lang$applyTo = (function (arglist__270970){
var args = cljs.core.seq(arglist__270970);
return G__270968__delegate(args);
});
G__270968.cljs$core$IFn$_invoke$arity$variadic = G__270968__delegate;
return G__270968;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__270971__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__270971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270972__i = 0, G__270972__a = new Array(arguments.length -  0);
while (G__270972__i < G__270972__a.length) {G__270972__a[G__270972__i] = arguments[G__270972__i + 0]; ++G__270972__i;}
  args = new cljs.core.IndexedSeq(G__270972__a,0);
} 
return G__270971__delegate.call(this,args);};
G__270971.cljs$lang$maxFixedArity = 0;
G__270971.cljs$lang$applyTo = (function (arglist__270973){
var args = cljs.core.seq(arglist__270973);
return G__270971__delegate(args);
});
G__270971.cljs$core$IFn$_invoke$arity$variadic = G__270971__delegate;
return G__270971;
})()
;

return null;
});
