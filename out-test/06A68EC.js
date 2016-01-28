goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__75668__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__75668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75669__i = 0, G__75669__a = new Array(arguments.length -  0);
while (G__75669__i < G__75669__a.length) {G__75669__a[G__75669__i] = arguments[G__75669__i + 0]; ++G__75669__i;}
  args = new cljs.core.IndexedSeq(G__75669__a,0);
} 
return G__75668__delegate.call(this,args);};
G__75668.cljs$lang$maxFixedArity = 0;
G__75668.cljs$lang$applyTo = (function (arglist__75670){
var args = cljs.core.seq(arglist__75670);
return G__75668__delegate(args);
});
G__75668.cljs$core$IFn$_invoke$arity$variadic = G__75668__delegate;
return G__75668;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__75671__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__75671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75672__i = 0, G__75672__a = new Array(arguments.length -  0);
while (G__75672__i < G__75672__a.length) {G__75672__a[G__75672__i] = arguments[G__75672__i + 0]; ++G__75672__i;}
  args = new cljs.core.IndexedSeq(G__75672__a,0);
} 
return G__75671__delegate.call(this,args);};
G__75671.cljs$lang$maxFixedArity = 0;
G__75671.cljs$lang$applyTo = (function (arglist__75673){
var args = cljs.core.seq(arglist__75673);
return G__75671__delegate(args);
});
G__75671.cljs$core$IFn$_invoke$arity$variadic = G__75671__delegate;
return G__75671;
})()
;

return null;
});
