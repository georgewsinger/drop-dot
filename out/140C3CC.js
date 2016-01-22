goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43866__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43867__i = 0, G__43867__a = new Array(arguments.length -  0);
while (G__43867__i < G__43867__a.length) {G__43867__a[G__43867__i] = arguments[G__43867__i + 0]; ++G__43867__i;}
  args = new cljs.core.IndexedSeq(G__43867__a,0);
} 
return G__43866__delegate.call(this,args);};
G__43866.cljs$lang$maxFixedArity = 0;
G__43866.cljs$lang$applyTo = (function (arglist__43868){
var args = cljs.core.seq(arglist__43868);
return G__43866__delegate(args);
});
G__43866.cljs$core$IFn$_invoke$arity$variadic = G__43866__delegate;
return G__43866;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43869__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43870__i = 0, G__43870__a = new Array(arguments.length -  0);
while (G__43870__i < G__43870__a.length) {G__43870__a[G__43870__i] = arguments[G__43870__i + 0]; ++G__43870__i;}
  args = new cljs.core.IndexedSeq(G__43870__a,0);
} 
return G__43869__delegate.call(this,args);};
G__43869.cljs$lang$maxFixedArity = 0;
G__43869.cljs$lang$applyTo = (function (arglist__43871){
var args = cljs.core.seq(arglist__43871);
return G__43869__delegate(args);
});
G__43869.cljs$core$IFn$_invoke$arity$variadic = G__43869__delegate;
return G__43869;
})()
;

return null;
});
