goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12539__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12540__i = 0, G__12540__a = new Array(arguments.length -  0);
while (G__12540__i < G__12540__a.length) {G__12540__a[G__12540__i] = arguments[G__12540__i + 0]; ++G__12540__i;}
  args = new cljs.core.IndexedSeq(G__12540__a,0);
} 
return G__12539__delegate.call(this,args);};
G__12539.cljs$lang$maxFixedArity = 0;
G__12539.cljs$lang$applyTo = (function (arglist__12541){
var args = cljs.core.seq(arglist__12541);
return G__12539__delegate(args);
});
G__12539.cljs$core$IFn$_invoke$arity$variadic = G__12539__delegate;
return G__12539;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12542__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12543__i = 0, G__12543__a = new Array(arguments.length -  0);
while (G__12543__i < G__12543__a.length) {G__12543__a[G__12543__i] = arguments[G__12543__i + 0]; ++G__12543__i;}
  args = new cljs.core.IndexedSeq(G__12543__a,0);
} 
return G__12542__delegate.call(this,args);};
G__12542.cljs$lang$maxFixedArity = 0;
G__12542.cljs$lang$applyTo = (function (arglist__12544){
var args = cljs.core.seq(arglist__12544);
return G__12542__delegate(args);
});
G__12542.cljs$core$IFn$_invoke$arity$variadic = G__12542__delegate;
return G__12542;
})()
;

return null;
});
