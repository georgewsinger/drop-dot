goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267652__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267653__i = 0, G__267653__a = new Array(arguments.length -  0);
while (G__267653__i < G__267653__a.length) {G__267653__a[G__267653__i] = arguments[G__267653__i + 0]; ++G__267653__i;}
  args = new cljs.core.IndexedSeq(G__267653__a,0);
} 
return G__267652__delegate.call(this,args);};
G__267652.cljs$lang$maxFixedArity = 0;
G__267652.cljs$lang$applyTo = (function (arglist__267654){
var args = cljs.core.seq(arglist__267654);
return G__267652__delegate(args);
});
G__267652.cljs$core$IFn$_invoke$arity$variadic = G__267652__delegate;
return G__267652;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267655__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267656__i = 0, G__267656__a = new Array(arguments.length -  0);
while (G__267656__i < G__267656__a.length) {G__267656__a[G__267656__i] = arguments[G__267656__i + 0]; ++G__267656__i;}
  args = new cljs.core.IndexedSeq(G__267656__a,0);
} 
return G__267655__delegate.call(this,args);};
G__267655.cljs$lang$maxFixedArity = 0;
G__267655.cljs$lang$applyTo = (function (arglist__267657){
var args = cljs.core.seq(arglist__267657);
return G__267655__delegate(args);
});
G__267655.cljs$core$IFn$_invoke$arity$variadic = G__267655__delegate;
return G__267655;
})()
;

return null;
});
