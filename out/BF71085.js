goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28506__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28507__i = 0, G__28507__a = new Array(arguments.length -  0);
while (G__28507__i < G__28507__a.length) {G__28507__a[G__28507__i] = arguments[G__28507__i + 0]; ++G__28507__i;}
  args = new cljs.core.IndexedSeq(G__28507__a,0);
} 
return G__28506__delegate.call(this,args);};
G__28506.cljs$lang$maxFixedArity = 0;
G__28506.cljs$lang$applyTo = (function (arglist__28508){
var args = cljs.core.seq(arglist__28508);
return G__28506__delegate(args);
});
G__28506.cljs$core$IFn$_invoke$arity$variadic = G__28506__delegate;
return G__28506;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28509__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28510__i = 0, G__28510__a = new Array(arguments.length -  0);
while (G__28510__i < G__28510__a.length) {G__28510__a[G__28510__i] = arguments[G__28510__i + 0]; ++G__28510__i;}
  args = new cljs.core.IndexedSeq(G__28510__a,0);
} 
return G__28509__delegate.call(this,args);};
G__28509.cljs$lang$maxFixedArity = 0;
G__28509.cljs$lang$applyTo = (function (arglist__28511){
var args = cljs.core.seq(arglist__28511);
return G__28509__delegate(args);
});
G__28509.cljs$core$IFn$_invoke$arity$variadic = G__28509__delegate;
return G__28509;
})()
;

return null;
});
